export interface NotificationProps {
  title: string;
  notification_id: number;
  content: string;
  target: string;
  type: string;
  extra: string;
  created_date: string;
  notification_image_url_list: string[];
  read: boolean;
}

export type NotificationResponse = NotificationProps[];

export type NotificationReadResponse = NotificationProps[];

export interface NotificationCountResponse {
  user_id: number;
  notification_count: number;
}
