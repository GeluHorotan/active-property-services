'use client';
import { FC, useState } from 'react';
import PaymentGraphData from '@ro/PaymentGraphData.json';
import PanelHeader from '@components/PanelHeader';
import Button from '@components/Button';
import IconFinder from '@icons/IconFinder';
import Dropdown from '@components/Dropdown';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const PaymentsGraph: FC = () => {
  const [view, setView] = useState<string>('plati');
  const { categories } = PaymentGraphData;

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const data = {
    labels: [
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
    ],
    datasets: [
      {
        label: 'Data 1',
        data: [1000, 2000, 3000, 4000, 1500, 2500, 3500], // Values for the first bar
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
      {
        label: 'Data 2',
        data: [-500, -1000, -750, 0, 750, 1250, 250], // Values for the second bar
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Bar color
        borderColor: 'rgba(255, 99, 132, 1)', // Border color
        borderWidth: 1,
      },
      {
        label: 'Data 3',
        data: [800, 1800, 2800, 3800, 700, 1600, 2600], // Values for the third bar
        backgroundColor: 'rgba(255, 205, 86, 0.2)', // Bar color
        borderColor: 'rgba(255, 205, 86, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: -1000,
        max: 4000,
        beginAtZero: false,
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
        },
        border: {
          display: false,
        },

        ticks: {
          callback: (value, index) => {
            if (index % 2 === 0) {
              return `${value / 1000}k`;
            }
          },
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical gridlines
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
          color: 'rgba(0, 0, 0, 0)', // Make the Y-axis line transparent
        },
      },
    },
  };

  return (
    <div className=" h-full   col-span-7 ">
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
          {/* Spendings and Dropdown */}
          <div className="grid grid-cols-13 gap-[19.5px]">
            <Dropdown></Dropdown>
            <div className=" col-span-9 flex flex-col gap-[10px]">
              <div className="flex gap-[10px] items-center">
                <div className="flex gap-[8px] items-center">
                  <div className="w-3 h-3 bg-custom_gray-600 rounded-full" />
                  <p className="font-normal leading-[21px] text-[#0B1023] ">
                    Venituri
                  </p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-3 h-3 bg-custom_purple-300 rounded-full" />
                  <p className="font-normal leading-[21px] text-[#0B1023] ">
                    Cheltuieli
                  </p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-3 h-3 bg-custom_gray-500 rounded-full" />
                  <p className="font-normal leading-[21px] text-[#0B1023] ">
                    Profit
                  </p>
                </div>
              </div>
              {/* Spendings */}
              <div className="flex gap-[15px] items-center">
                <p className="font-medium leading-[21px] text-custom_gray-600">
                  Venituri - &euro; 15.000
                </p>
                <p className="font-medium leading-[21px] text-custom_purple-300">
                  Cheltuieli - &euro; 15.000
                </p>
                <p className="font-medium leading-[21px] text-custom_gray-500">
                  Profit - &euro; 6.000
                </p>
                <p className="font-medium leading-[21px] text-custom_green-400">
                  ROI - 8.8%
                </p>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsGraph;
