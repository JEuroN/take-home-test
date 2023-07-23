import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { GithubClientService } from 'src/github-client/github-client.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubClient: GithubClientService) {}
  @Get('/branch')
  async GetRepo(@Res() res: Response) {
    const branch = await this.githubClient.GetRepoBranches();
    res.status(HttpStatus.OK).json({
      message: 'ok',
      data: branch,
    });
  }

  @Get('/commit/:name')
  async GetCommit(@Param('name') name: string, @Res() res: Response) {
    const commits = await this.githubClient.GetBranchCommits(name);
    res.status(HttpStatus.OK).json({
      message: 'ok',
      data: commits,
    });
  }
}
