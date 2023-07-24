import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubClientService } from './github-client/github-client.service';
import { GithubController } from './github/github.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubClientService],
})
export class AppModule {}
