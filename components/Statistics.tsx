'use client';
import { FC, useState } from 'react';
import { IPaymentGraph } from '@/types/IPaymentGraph';
import PaymentGraphData from '@ro/PaymentGraphData.json';
import PanelHeader from '@components/PanelHeader';

import PaymentsGraphBody from '@components/PaymentsGraphBody';
import ContentNotFound from '@components/ContentNotFound';

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
    <div className="     col-span-7 ">
      <PanelHeader categories={categories} setView={setView} view={view} />
      <div className=" h-[530px]  rounded-b-4xl rounded-tr-4xl bg-white pt-[25px] pl-[25px] pr-[30px] ">
        {view === 1 ? (
          <PaymentsGraphBody
            dropdown={dropdown}
            graph_legend={graph_legend}
            graph_sub_legend={graph_sub_legend}
            title={title}
            button={button}
          />
        ) : (
          <ContentNotFound>
            We&apos;re working on this, please be patient.
          </ContentNotFound>
        )}
      </div>
    </div>
  );
};

export default Statistics;
