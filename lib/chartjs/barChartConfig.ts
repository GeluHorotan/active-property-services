import { externalTooltipHandler } from '@lib/externalTooltipHandler';

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

export const intersectionAnnotations = data1.map((value1, i) => {
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
export const intersectionAnnotations2 = data3.map((value3, i) => {
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
export const barOptions: any = {
  plugins: {
    tooltip: {
      enabled: false,
      position: 'nearest',
      external: externalTooltipHandler,
    },
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
        // padding: 20,
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

export const barData = {
  labels: ['Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August'],
  datasets: [
    {
      label: 'Data 1',
      data: data1,
      backgroundColor: '#838FDE',
      hoverBackgroundColor: '#838FDE',
    },
    {
      label: 'Data 2',
      data: data1.map((value1, i) => {
        const value3 = data3[i][1] - 55;
        return [Math.min(value1[1], value3), Math.max(value1[1], value3)];
      }),
      backgroundColor: '#FF6880',
      hoverBackgroundColor: '#FF6880',
    },
    {
      label: 'Data 3',
      data: data3,
      backgroundColor: (context: any) => {
        const value = context.dataset.data[context.dataIndex][1];
        return value >= 0 ? '#888888' : '#FF0000';
      },
      hoverBackgroundColor: (context: any) => {
        const value = context.dataset.data[context.dataIndex][1];
        return value >= 0 ? '#888888' : '#FF0000';
      },
    },
  ],
};
