import { Dropdown as IDropdown } from '@/types/IPaymentGraph';
import { FC } from 'react';
import Button from '@components/Button';
import IconFinder from '@icons/IconFinder';
import Dropdown from '@components/Dropdown';
import { Bar } from 'react-chartjs-2';
import { barData, barOptions } from '@lib/chartjs/barChartConfig';
import AnnotationPlugin from 'chartjs-plugin-annotation';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Menu } from '@headlessui/react';

interface IPaymentsGraphBody {
  dropdown: IDropdown;
  graph_legend: {
    title: string;
    bg_color: string;
    color: string;
  }[];
  graph_sub_legend: {
    text: string;
    color: string;
  }[];
  title: string;
  button: {
    text: string;
    iconName: string;
  };
}

const PaymentsGraphBody: FC<IPaymentsGraphBody> = ({
  dropdown,
  graph_legend,
  graph_sub_legend,
  title,
  button,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    AnnotationPlugin
  );
  return (
    <div className="w-full flex flex-col gap-4   pb-[18px] ">
      {/* Top part */}
      <div className=" w-full flex items-center justify-between">
        <h4 className="font-semibold leading-[27px]">{title}</h4>
        <Button
          className="p-0 border-none  text-[14px] font-normal leading-[21px] text-[#0B1023] gap-[12.7px] flex items-center justify-center"
          icon={<IconFinder name={button?.iconName} />}
        >
          {button.text}
        </Button>
      </div>
      {/* Spendings and Dropdown */}
      <div className="grid grid-cols-13 gap-[19.5px]">
        <Dropdown title={dropdown?.title}>
          {dropdown?.entries.map((entry, i) => {
            return (
              <Menu.Item key={i}>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    {entry?.title}
                  </div>
                )}
              </Menu.Item>
            );
          })}
        </Dropdown>
        <div className=" col-span-9 flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            {graph_legend?.map(
              (
                legend: { title: string; color: string; bg_color: string },
                i: number
              ) => {
                return (
                  <div key={i} className="flex gap-[8px] items-center">
                    <div
                      className={`w-3 h-3 ${legend?.bg_color} rounded-full `}
                    />
                    <span
                      className={`font-normal leading-[21px] text-[${legend?.color}] text-[14px]`}
                    >
                      {legend.title}
                    </span>
                  </div>
                );
              }
            )}
          </div>
          {/* Spendings */}
          <div className="flex gap-[15px] items-center ">
            {graph_sub_legend?.map(
              (
                sub_legend: {
                  text: string;
                  color: string;
                },
                i: number
              ) => {
                return (
                  <span
                    key={i}
                    className={`${sub_legend?.color} font-medium leading-[21px] text-[14px] `}
                    dangerouslySetInnerHTML={{ __html: sub_legend?.text }}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="    w-full  ">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default PaymentsGraphBody;
