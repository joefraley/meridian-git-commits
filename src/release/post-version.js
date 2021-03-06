import conventionalGithubReleaser from 'conventional-github-releaser';
import {exec} from 'shelljs';
const {log} = console;

export default async ({token}) => {
  await exec(`git push --force --follow-tags origin HEAD:master`);
  return await conventionalGithubReleaser(
    {type: 'oauth', token: process.env.GH_TOKEN || token},
    {preset: 'angular'},
    log
  );
};
