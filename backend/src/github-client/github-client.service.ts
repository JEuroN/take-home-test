import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';
@Injectable()
export class GithubClientService {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      request: { fetch },
    });
  }

  async GetRepoBranches() {
    const repo = await this.octokit.request(
      'GET /repos/JEuroN/take-home-test/branches',
      {
        owner: 'JEuroN',
        repo: 'take-home-test',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return repo.data;
  }

  async GetBranchCommits(name: string) {
    const repo = await this.octokit.request(
      `GET /repos/JEuroN/take-home-test/commits?sha=${name}`,
      {
        owner: 'JEuroN',
        repo: 'take-home-test',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return repo.data;
  }
}
