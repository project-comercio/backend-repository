import { Test } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let notificationsService: NotificationsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [], 
      providers: [], 
    }).compile();

    notificationsService =
      moduleRef.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(notificationsService).toBeDefined();
  });
});
