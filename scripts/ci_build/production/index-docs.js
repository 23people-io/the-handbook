
module.exports = async ({github, context, core}) => {
  const branch = await github.rest.repos.getBranch({
    owner: context.repo.owner,
    repo: context.repo.repo,
    branch: `main`
  });
  console.log(branch.data);
}