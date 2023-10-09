'use client';
import { useState, FC } from 'react';
import PanelHeader from '@components/PanelHeader';
import PaymentData from '@ro/PaymentData.json';
import ContentNotFound from './ContentNotFound';
import PaymentBody from './PaymentBody';
import { IPayments } from '@/types/IPayments';

const Payments: FC = () => {
  const [view, setView] = useState<number>(1);
  const { categories, payments }: IPayments = PaymentData;

  return (
    <div className="  col-span-6 ">
      <PanelHeader categories={categories} setView={setView} view={view} />
      <div className="w-full h-[430px] bg-white rounded-b-4xl rounded-tr-4xl pt-[25px] pb-[48px] pl-[25px] pr-5 ">
        {view === 1 && <PaymentBody payments={payments}></PaymentBody>}
        {view === 2 && (
          <ContentNotFound className="w-full  h-full items-center flex justify-center">
            We&apos;re working on this, please be patient.
          </ContentNotFound>
        )}
      </div>
    </div>
  );
};

export default Payments;
