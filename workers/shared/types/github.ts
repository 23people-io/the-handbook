// shared/types/github.ts

// Configuration interfaces
export interface GithubAppConfig {
  appId: string;
  privateKey: string;
  installationId: string;
}

export interface GithubRepoConfig {
  owner: string;
  name: string;
  branch?: string;
}

// GitHub API specific interfaces
export interface GithubFile {
  path: string;
  url: string;
  raw_url: string;
  sha: string;
  type: string;
  content?: string;
}

export interface GitHubTreeResponse {
  tree: Array<{
    path: string;
    mode: string;
    type: string;
    sha: string;
    url: string;
    size?: number;
  }>;
}

export interface GitHubContentResponse {
  type: string;
  encoding: string;
  size: number;
  name: string;
  path: string;
  content: string;
  sha: string;
  url: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
}

export interface GithubFile {
  path: string;
  url: string;
  raw_url: string;
  sha: string;
  type: string;
  content?: string;
}

export interface GithubAppConfig {
  appId: string;
  privateKey: string;
  installationId: string;
}

export interface GithubRepoConfig {
  owner: string;
  name: string;
  branch?: string;
}
