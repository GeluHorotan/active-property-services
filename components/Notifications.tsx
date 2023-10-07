import { FC } from 'react';
import NotificationData from '@ro/NotificationData.json';

const Notifications: FC = () => {
  const { notifications } = NotificationData;
  return (
    <div className=" row-span-1  col-span-7 h-full flex-col flex  ">
      {/* Header */}
      <div className="flex w-full gap-[5px]">
        <div className="w-[152px] h-[43px] bg-white rounded-t-[15px] flex items-center justify-center">
          <h5 className="font-medium">Toate</h5>
        </div>
        <div className="w-[152px] h-[43px] bg-custom_blue-300 text-white rounded-t-[15px] flex items-center justify-center">
          <h5 className="font-regular"> Leasing</h5>
        </div>
        <div className="w-[152px] h-[43px] bg-custom_blue-300 text-white rounded-t-[15px] flex items-center justify-center">
          <h5 className="font-regular">Tehnic</h5>
        </div>
        <div className="w-[152px] h-[43px] bg-custom_blue-300 text-white rounded-t-[15px] flex items-center justify-center">
          <h5 className="font-regular">Financiar</h5>
        </div>
      </div>
      {/* Body */}
      <div className="w-full h-[479px]  flex flex-col gap-5 bg-white  rounded-b-4xl py-[28px] pl-[22.3px] pr-[30px]  ">
        <h4 className="font-semibold text-semibold">Notificari</h4>
        <div className="flex flex-col gap-[25px] h-full overflow-y-scroll  ">
          {notifications?.map((notification, i) => {
            return (
              <div key={i} className="flex flex-col gap-[9px]">
                <div className="flex items-center justify-between pr-5 ">
                  <div className="gap-[13.5px] flex items-center">
                    <h5
                      className={`${
                        notification.isRead
                          ? 'font-regular text-gray-800'
                          : 'font-medium text-gray-900'
                      }  leading-6`}
                    >
                      {notification?.title}
                    </h5>
                    <div className="flex gap-[7.5px] items-center">
                      {notification?.tags.map((tag, i) => {
                        return (
                          <div
                            key={i}
                            className="py-1 px-[11px]  rounded-4xl flex items-center justify-center bg-red-400"
                          >
                            <p className="text-[12px] font-regular">
                              {tag.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p>{notification.date}</p>
                </div>
                <p className="text-[12px] font-regular leading-[18px]">
                  {notification.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
