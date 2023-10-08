export interface INotifications {
  notifications: INotification[];
  categories: ICategory[];
}

export interface INotification {
  [x: string]: any;
  title: string;
  desc: string;
  date: string;
  tags: {
    name: string;
    type: string;
  }[];
  isRead: boolean;
  reminder?: boolean;
  category: string;
  iconName: string;
}

export interface ICategory {
  title: string;
  iconName?: string;
  identifier: string;
}
