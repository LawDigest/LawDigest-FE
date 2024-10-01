export interface NotificationProps {
  title: string;
  content: string;
  target: string;
  type: string;
  created_date: string;
  notification_image_url_list: string[];
}

export type NotificationResponse = NotificationProps[];

export type NotificationReadResponse = NotificationProps[];
