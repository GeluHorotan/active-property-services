'use client';
import { FC, useState } from 'react';
import { IPaymentGraph } from '@/types/IPaymentGraph';
import PaymentGraphData from '@ro/PaymentGraphData.json';
import PanelHeader from '@components/PanelHeader';

import PaymentsGraphBody from '@components/PaymentsGraphBody';

const Statistics: FC = () => {
  const [view, setView] = useState<number>(1);
  const {
    categories,
    dropdown,
    graph_legend,
    graph_sub_legend,
    title,
    button,
  }: IPaymentGraph = PaymentGraphData;

  return (
    <div className=" h-full  col-span-7 ">
      <PanelHeader categories={categories} setView={setView} view={view} />
      {view === 1 ? (
        <PaymentsGraphBody
          dropdown={dropdown}
          graph_legend={graph_legend}
          graph_sub_legend={graph_sub_legend}
          title={title}
          button={button}
        />
      ) : (
        'Not found'
      )}
    </div>
  );
};

export default Statistics;
