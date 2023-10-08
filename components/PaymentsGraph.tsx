'use client';
import { FC, useState } from 'react';
import PaymentGraphData from '@ro/PaymentGraphData.json';
import PanelHeader from '@components/PanelHeader';
import Button from '@components/Button';
import IconFinder from './svgs/icons/IconFinder';
import Dropdown from './Dropdown';

const PaymentsGraph: FC = () => {
  const [view, setView] = useState<string>('plati');
  const { categories } = PaymentGraphData;
  return (
    <div className=" h-[473px]   col-span-7 ">
      <PanelHeader categories={categories} setView={setView} view={view} />
      <div className=" h-full rounded-b-4xl rounded-tr-4xl bg-white pt-[25px] pl-[25px] pr-[30px]  ">
        <div className="w-full flex flex-col gap-4  ">
          {/* Top part */}
          <div className=" w-full flex items-center justify-between">
            <h4 className="font-semibold leading-[27px]">Sumar P&L</h4>
            <Button
              className="p-0 border-none text-[14px] font-normal leading-[21px] text-[#0B1023] gap-[12.7px] flex items-center justify-center"
              icon={<IconFinder name="Download" />}
            >
              Descarca raport
            </Button>
          </div>{' '}
          <div className="grid grid-cols-13 gap-[19.5px]">
            <Dropdown></Dropdown>
            <div className=" col-span-9 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <p className="font-normal leading-[21px] text-[#0B1023] ">
                  Venituri
                </p>
                <p className="font-normal leading-[21px] text-[#0B1023] ">
                  Cheltuieli
                </p>
                <p className="font-normal leading-[21px] text-[#0B1023] ">
                  Profit
                </p>
              </div>
              <div className="flex gap-[15px]">
                <p className="font-medium leading-[21px] text-custom_gray-600">
                  Venituri - &euro;15.000
                </p>
                <p className="font-medium leading-[21px] text-custom_purple-300">
                  Cheltuieli - &euro;15.000
                </p>
                <p className="font-medium leading-[21px] text-custom_gray-500">
                  Profit - &euro;6.000
                </p>
                <p className="font-medium leading-[21px] text-custom_green-400">
                  ROI - 8.8%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsGraph;
