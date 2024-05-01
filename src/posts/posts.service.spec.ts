import { Test } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [],
    }).compile();

    postsService = moduleRef.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(postsService).toBeDefined();
  });
});
