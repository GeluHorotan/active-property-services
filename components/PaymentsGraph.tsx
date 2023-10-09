'use client';
import { FC, useState } from 'react';
import PaymentGraphData from '@ro/PaymentGraphData.json';
import PanelHeader from '@components/PanelHeader';
import Button from '@components/Button';
import IconFinder from '@icons/IconFinder';
import Dropdown from '@components/Dropdown';
import { Bar } from 'react-chartjs-2';
import AnnotationPlugin from 'chartjs-plugin-annotation';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';

const PaymentsGraph: FC = () => {
  const [view, setView] = useState<string>('plati');
  const { categories } = PaymentGraphData;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    AnnotationPlugin
  );

  const data1 = [
    [0, 3100],
    [0, 2900],
    [0, 2900],
    [0, 1800],
    [0, 1800],
    [0, 500],
    [0, 600],
  ];

  const data3 = [
    [0, 1950],
    [0, -500],
    [0, 500],
    [0, 1000],
    [0, 1100],
    [0, 200],
    [0, 400],
  ];

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
        data: data1,
        backgroundColor: '#838FDE',
      },
      {
        label: 'Data 2',
        data: data1.map((value1, i) => {
          const value3 = data3[i][1] - 55;
          return [Math.min(value1[1], value3), Math.max(value1[1], value3)];
        }),
        backgroundColor: '#FF6880',
      },
      {
        label: 'Data 3',
        data: data3,
        backgroundColor: (context: any) => {
          const value = context.dataset.data[context.dataIndex][1];
          return value >= 0 ? '#888888' : '#FF0000';
        },
      },
    ],
  };

  const intersectionAnnotations = data1.map((value1, i) => {
    return {
      type: 'line',
      mode: 'horizontal',
      xScaleID: 'x',
      yScaleID: 'y',
      xMin: i - 1 / 3, // Set the x-axis value where you want the line (intersection point)
      xMax: i + 1 / 10, // Extend the line to the next data point
      yMin: value1[1] - 25, // Set the minimum y-axis value (intersection point)
      yMax: value1[1] - 25, // Set the maximum y-axis value (intersection point)
      borderColor: '#838FDE', // Color of the line
      borderWidth: 1, // Width of the line
      borderDash: [1, 2], // Makes it a dotted line
      label: {
        enabled: true,
        content: `Intersection Point ${i + 1}`, // Label for the annotation
        position: 'right', // Adjust label position
      },
      drawTime: 'beforeDatasetsDraw',
    };
  });
  const intersectionAnnotations2 = data3.map((value3, i) => {
    const isNegative = value3[1] < 0;
    const yOffset = isNegative ? -15 : +25; // Adjust the yOffset based on your preference

    return {
      type: 'line',
      mode: 'horizontal',
      xScaleID: 'x',
      yScaleID: 'y',
      xMin: i - 1 / 13, // Set the x-axis value where you want the line (intersection point)
      xMax: i + 1 / 3, // Extend the line to the next data point
      yMin: value3[1] - yOffset, // Set the minimum y-axis value (intersection point)
      yMax: value3[1] - yOffset, // Set the maximum y-axis value (intersection point)
      borderColor: '#FF6880', // Color of the line
      borderWidth: 1, // Width of the line
      borderDash: [1, 2], // Makes it a dotted line

      drawTime: 'beforeDatasetsDraw',
    };
  });

  // Type - to be fixed!!!!!
  const options: any = {
    plugins: {
      annotation: {
        annotations: [...intersectionAnnotations, ...intersectionAnnotations2],
      },
    },
    categoryPercentage: 0.8,
    barPercentage: 0.7,
    offset: {
      x: 20,
      y: 100,
    },

    scales: {
      y: {
        min: -1000,
        offset: true,
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
          color: '#B2B2BE',
          font: {
            size: 14,
            weight: '300',
          },
          padding: 10,
          crossAlign: 'start',
          callback: (value: number, index: number) => {
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
        ticks: {
          color: '#B2B2BE',
          font: {
            size: 14,
            weight: '300',
          },
        },

        border: {
          display: false,
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
              <div className="flex gap-[15px] items-center ">
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
