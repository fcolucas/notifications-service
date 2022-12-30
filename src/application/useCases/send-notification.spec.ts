import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  create: async (notification: Notification) => {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'You have a new message',
      category: 'social',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
