'use client';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect, FC } from 'react';
import PanelHeader from '@components/PanelHeader';
import PaymentData from '@ro/PaymentData.json';
import { Spinner } from '@nextui-org/react';
import IconFinder from './svgs/icons/IconFinder';

const Payments: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [view, setView] = useState<string>('plati');
  const { categories, payments } = PaymentData;

  useEffect(() => {
    ChartJS.register(ArcElement);
    setIsLoading(false);
  }, []);

  const data = {
    labels: ['Mentenanta si reparatii', 'Altele'],
    datasets: [
      {
        data: [100, 500],

        backgroundColor: ['#ECECEC', '#838FDE'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="  col-span-6 ">
      <PanelHeader categories={categories} setView={setView} view={view} />

      <div className="w-full bg-white rounded-b-4xl rounded-tr-4xl pt-[25px] pb-[48px] pl-[25px] pr-5 ">
        <div className="w-full gap-[15px] flex flex-col   h-full ">
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
          <div className="flex flex-col gap-[57px]">
            <div className="flex items-center gap-[25px]  ">
              {payments.spent_on.map((pay, i) => {
                return (
                  <div key={i} className="flex gap-2 items-center">
                    <div
                      className={`${
                        pay.is_majority ? 'bg-custom_blue-200' : 'bg-[#ECECEC]'
                      } w-3 h-3 rounded-full`}
                    />
                    <div className="text-[14px] font-normal leading-[21px]">
                      {pay.label_title}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full justify-between items-end">
              <div className="relative flex items-center   w-[240px] min-h-[240px] h-max ml-5  ">
                <div className=" w-full flex items-center justify-center">
                  {isLoading && <Spinner size="lg" />}
                </div>
                {!isLoading && (
                  <>
                    <Doughnut
                      data={data}
                      options={{
                        cutout: 97,
                        layout: { padding: 0 },
                      }}
                      className=""
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col">
                      <h6 className="font-light leading-[23px]">TOTAL</h6>
                      <h2 className="font-semibold leading-[43px]">
                        &euro;{payments.total_spent}
                      </h2>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-[18px]">
                {payments?.tabel?.map((entry, i) => {
                  return (
                    <div key={i} className="flex items-center gap-[74px]  ">
                      <div className="flex gap-[10px] items-center">
                        <IconFinder name={entry.iconName} />
                        <p className="text-[14px] font-medium leading-[21px]">
                          {entry.title}
                          {entry.sub_title && (
                            <>
                              {' '}
                              <br /> {entry.sub_title}
                            </>
                          )}
                        </p>
                      </div>

                      <h5 className="w-full font-semibold  text-end leading-[25px] ">
                        &euro; {entry?.amount}
                      </h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;