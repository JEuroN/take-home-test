import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { GithubClientService } from 'src/github-client/github-client.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubClient: GithubClientService) {}
  @Get('/branch')
  async GetRepo(@Res() res: Response) {
    try {
      const branch = await this.githubClient.GetRepoBranches();
      res.status(HttpStatus.OK).json({
        message: 'ok',
        data: branch,
      });
    } catch (err) {
      if (err.response)
        return res.status(err.status).json({
          message: err.message,
          data: null,
        });

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: err.message,
        data: null,
      });
    }
  }

  @Get('/commit/:name')
  async GetCommit(@Param('name') name: string, @Res() res: Response) {
    try {
      const commits = await this.githubClient.GetBranchCommits(name);
      res.status(HttpStatus.OK).json({
        message: 'ok',
        data: commits,
      });
    } catch (err) {
      if (err.response)
        return res.status(err.status).json({
          message: err.message,
          data: null,
        });

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: err.message,
        data: null,
      });
    }
  }
}
