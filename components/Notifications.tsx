'use client';

import { FC, useState } from 'react';
import NotificationData from '@ro/NotificationData.json';
import PanelHeader from '@components/PanelHeader';
import NotificationsBody from './NotificationsBody';
import { INotification, INotifications } from '@/types/INotifications';

const Notifications: FC = () => {
  const [view, setView] = useState<number>(1);

  const { notifications, categories }: INotifications = NotificationData;

  const filterNotifications = (
    notifications: INotification[],
    filterBy: string | number
  ) => {
    if (filterBy === 1) {
      return notifications;
    } else {
      return notifications.filter(
        (notification: INotification) => notification.filterBy === filterBy
      );
    }
  };

  return (
    <div className="col-span-7  flex-col flex ">
      {/* Header */}
      <PanelHeader view={view} setView={setView} categories={categories} />
      {/* Body */}

      <NotificationsBody
        notifications={filterNotifications(notifications, view)}
      />
    </div>
  );
};

export default Notifications;
