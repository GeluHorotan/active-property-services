import { FC } from 'react';

const Notifications: FC = () => {
  return (
    <div className="   col-span-7 h-full flex-col flex ">
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
      <div className="w-full h-full flex flex-col gap-5 bg-white rounded-b-4xl py-[28px] pl-[22.3px] pr-[30px] ">
        <h4 className="font-semibold text-semibold">Notificari</h4>
      </div>
    </div>
  );
};

export default Notifications;
