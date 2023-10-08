'use client';
import { useState, FC } from 'react';
import PanelHeader from '@components/PanelHeader';
import PaymentData from '@ro/PaymentData.json';

const Payments: FC = () => {
  const [view, setView] = useState<string>('plati');
  const { categories, payments } = PaymentData;

  return (
    <div className="h-[473px]  col-span-6 ">
      <PanelHeader categories={categories} setView={setView} view={view} />

      <div className="w-full h-full bg-white rounded-b-4xl rounded-tr-4xl py-[25px] pl-[25px] pr-5 ">
        <div className="w-full gap-[15px] flex flex-col">
          <div className=" w-full flex items-center justify-between">
            <h4 className="font-semibold leading-[27px]">{payments.title}</h4>
            <div className="flex items-center justify-center gap-[10px]">
              <div className="bg-custom_blue-800 rounded-2xl px-6 py-2 text-[12px] font-normal leading-[18px] ">
                {payments.from}
              </div>
              <div className="bg-custom_blue-800 rounded-2xl px-6 py-2  text-[12px] font-normal leading-[18px]">
                {payments.to}
              </div>
            </div>
          </div>{' '}
          <div className="flex items-center gap-[25px]">
            {payments.spent_on.map((pay, i) => {
              return (
                <div key={i} className="flex gap-2 items-center">
                  <div
                    className={`${
                      pay.is_prioritized ? 'bg-custom_blue-200' : 'bg-[#ECECEC]'
                    } w-3 h-3 rounded-full`}
                  ></div>
                  <div>{pay.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
