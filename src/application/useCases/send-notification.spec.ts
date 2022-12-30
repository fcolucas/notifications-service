import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient_id',
      content: 'You have a new message',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
