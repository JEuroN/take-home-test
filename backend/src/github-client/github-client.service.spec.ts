import { Test, TestingModule } from '@nestjs/testing';
import { GithubClientService } from './github-client.service';

describe('GithubClientService', () => {
  let service: GithubClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubClientService],
    }).compile();

    service = module.get<GithubClientService>(GithubClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
