import { Test } from '@nestjs/testing';
import { NotificationsResolver } from './notifications.resolver';

describe('NotificationsResolver', () => {
  let notificationsResolver: NotificationsResolver;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    notificationsResolver = moduleRef.get<NotificationsResolver>(
      NotificationsResolver,
    );
  });

  it('should be defined', () => {
    expect(notificationsResolver).toBeDefined();
  });
});
