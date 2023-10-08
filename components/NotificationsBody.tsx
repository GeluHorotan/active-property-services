import { FC } from 'react';
import { Tooltip } from '@nextui-org/react';
import IconFinder from '@svgs/icons/IconFinder';
import { INotification } from '@/types/INotifications';

interface INotificationsBody {
  notifications: INotification[];
}

const NotificationsBody: FC<INotificationsBody> = ({ notifications }) => {
  const tagsType: { [key: string]: string } = {
    bill: 'bg-custom_green-500 text-white',
    street: 'bg-custom_blue-800 text-custom_gray-900',
    reminder: 'bg-custom_purple-100 text-white',
    pay: 'bg-custom_red-700 text-white ',
    incomingMoney:
      'border-[0.5px]  border-custom_gray-900 text-custom_gray-900',
    repair: 'border-[0.5px]  border-custom_gray-900 text-custom_gray-900',
    ticket: 'bg-custom_blue-400 text-white',
  };

  return (
    <div className="w-full  h-[490px] flex flex-col gap-[27px] bg-white  rounded-b-4xl pt-[28px] pb-9 pl-[22.3px] pr-[30px]  ">
      <h4 className="font-semibold text-semibold leading-[27px]">Notificari</h4>
      <div className="flex flex-col gap-[25px] h-full overflow-y-scroll test">
        {notifications?.map((notification: INotification, i) => {
          return (
            <div className="gap-[13.3px] flex items-start  w-full pr-5" key={i}>
              <div
                className={`w-2 h-2 ${
                  !notification.isRead ? 'bg-custom_blue-300' : 'opacity-0'
                }  rounded-full mt-2`}
              />

              <div className="flex flex-col gap-[10.5px]  w-full ">
                <div className="flex items-center justify-between   ">
                  <div className="gap-[13.5px] flex items-center">
                    <div className="gap-[8.5px] flex items-center justify-center">
                      <IconFinder
                        name={notification.iconName}
                        className={`${
                          !notification.isRead
                            ? 'fill-[#0B1023]'
                            : 'fill-custom_gray-700'
                        }`}
                        size={16}
                      />
                      <h5
                        className={`${
                          notification.isRead
                            ? 'font-regular text-gray-700'
                            : 'font-medium text-gray-900'
                        }  leading-[25px]`}
                      >
                        {notification?.title}
                      </h5>
                    </div>
                    <div className="flex gap-[7.5px] items-center">
                      {notification?.tags.map((tag, i) => {
                        return (
                          <div
                            key={i}
                            className={`py-1 px-[11px]  rounded-[13px] flex items-center justify-center ${
                              tagsType[tag.type]
                            }`}
                          >
                            <p className="text-[12px] font-regular leading-[18px]">
                              {tag.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {notification.reminder && (
                    <Tooltip
                      classNames={{
                        base: ' shadow-none drop-shadow-[0_0px_4px_rgba(172,172,172,0.42)] bg-white rounded-[10px] py-2 px-5 ',
                        arrow:
                          'drop-shadow-[0_0px_4px_rgba(172,172,172,0.42)]  bg-white',
                      }}
                      showArrow={true}
                      content={
                        <>
                          <p className="text-[12px] font-light leading-4 text-custom_gray-900">
                            Factura <br /> overdue
                          </p>
                        </>
                      }
                      placement="left"
                    >
                      <span className="w-[25px] h-[25px] cursor-pointer bg-custom_purple-100 rounded-[13px] px-[11.5px] py-[6px] flex items-center justify-center text-white font-normal">
                        !
                      </span>
                    </Tooltip>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-regular leading-[18px] text-custom_gray-700">
                    {notification.desc}
                  </p>
                  <p className="font-regular  text-[12px] leading-[18px] text-[#AFAEAE] ">
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsBody;
