export interface NotificationProps {
  title: string;
  content: string;
  target: string;
  type: string;
  created_date: string;
  notification_image_url: string;
}

export type NotificationResponse = NotificationProps[];
