'use client';

import { FC, useState } from 'react';
import NotificationData from '@ro/NotificationData.json';
import PanelHeader from '@components/PanelHeader';
import NotificationsBody from './NotificationsBody';
import { INotification, INotifications } from '@/types/INotifications';

const Notifications: FC = () => {
  const [filterBy, setFilterOption] = useState<string>('all');

  const { notifications, categories }: INotifications = NotificationData;

  const filterNotifications = (
    notifications: INotification[],
    filterBy: string
  ) => {
    if (filterBy === 'all') {
      return notifications;
    } else {
      return notifications.filter(
        (notification: INotification) => notification.category === filterBy
      );
    }
  };

  return (
    <div className="col-span-7  flex-col flex">
      {/* Header */}
      <PanelHeader setFilterOption={setFilterOption} categories={categories} />
      {/* Body */}
      <NotificationsBody
        notifications={filterNotifications(notifications, filterBy)}
      />
    </div>
  );
};

export default Notifications;
