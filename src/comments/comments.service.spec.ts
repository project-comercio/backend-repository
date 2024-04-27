import { Test } from '@nestjs/testing';
import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  let commentsService: CommentsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], 
      controllers: [], 
      providers: [], 
    }).compile();

    commentsService = moduleRef.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(commentsService).toBeDefined();
  });
});
