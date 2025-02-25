import { App, type Octokit } from "octokit";
import {
  BaseReader,
  Document,
  GithubAppConfig,
  GithubFile,
  GithubRepoConfig,
  ReaderOptions,
} from "../types";

export class GithubReader implements BaseReader {
  private octokit?: Octokit;
  private repoConfig: GithubRepoConfig;

  private constructor(repoConfig: GithubRepoConfig) {
    this.repoConfig = {
      branch: "main",
      ...repoConfig,
    };
  }

  static async create(
    appConfig: GithubAppConfig,
    repoConfig: GithubRepoConfig
  ): Promise<GithubReader> {
    const reader = new GithubReader(repoConfig);
    await reader.initialize(appConfig);
    return reader;
  }

  private async initialize(appConfig: GithubAppConfig): Promise<void> {
    try {
      const app = new App({
        appId: appConfig.appId,
        privateKey: appConfig.privateKey,
      });

      this.octokit = await app.getInstallationOctokit(
        parseInt(appConfig.installationId, 10)
      );
    } catch (error) {
      console.error("Failed to initialize GitHub client:", error);
      throw error;
    }
  }

  async loadData(options: ReaderOptions = {}): Promise<Document[]> {
    const files = await this.getRepositoryFiles(options);
    const documents = await this.loadFileContents(files);
    return documents;
  }

  private async getRepositoryFiles(
    options: ReaderOptions
  ): Promise<GithubFile[]> {
    if (!this.octokit) throw new Error("GitHub client not initialized");

    const response = await this.octokit.request(
      "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
      {
        owner: this.repoConfig.owner,
        repo: this.repoConfig.name,
        tree_sha: this.repoConfig.branch!,
        recursive: options.recursive ? "1" : undefined,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    let files = response.data.tree as GithubFile[];

    if (options.includedPaths?.length) {
      files = files.filter((file) =>
        options.includedPaths!.some((path) => file.path.startsWith(path))
      );
    }

    if (options.includedFilters?.length) {
      files = files.filter((file) =>
        options.includedFilters!.some((filter) => file.path.endsWith(filter))
      );
    }

    return files.filter((file) => file.type === "blob");
  }

  private async loadFileContents(files: GithubFile[]): Promise<Document[]> {
    if (!this.octokit) throw new Error("GitHub client not initialized");

    const documents = await Promise.all(
      files.map(async (file) => {
        const response = await this.octokit!.request(
          "GET /repos/{owner}/{repo}/contents/{path}",
          {
            owner: this.repoConfig.owner,
            repo: this.repoConfig.name,
            path: file.path,
            ref: this.repoConfig.branch,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        //FIXME: This is a temporary fix to handle the response data format
        let content;
        if (!Array.isArray(response.data) && "content" in response.data) {
          content = Buffer.from(response.data.content, "base64").toString();
        } else {
          throw new Error("Unexpected response data format");
        }

        return {
          id: file.sha,
          path: file.path,
          content,
          metadata: {
            url: file.url,
            raw_url: file.raw_url,
            sha: file.sha,
            type: file.type,
          },
        } as Document;
      })
    );

    return documents;
  }

  async getFileContent(path: string): Promise<string> {
    if (!this.octokit) throw new Error("GitHub client not initialized");

    const response = await this.octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: this.repoConfig.owner,
        repo: this.repoConfig.name,
        path,
        ref: this.repoConfig.branch,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    //FIXME: This is a temporary fix to handle the response data format
    let content;
    if (!Array.isArray(response.data) && "content" in response.data) {
      content = Buffer.from(response.data.content, "base64").toString();
    } else {
      throw new Error("Unexpected response data format");
    }

    return Buffer.from(response.data.content, "base64").toString();
  }
}
