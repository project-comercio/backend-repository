import { Test } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let notificationsService: NotificationsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    notificationsService =
      moduleRef.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(notificationsService).toBeDefined();
  });
});
