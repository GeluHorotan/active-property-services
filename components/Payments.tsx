'use client';
import { useState, FC } from 'react';
import PanelHeader from '@components/PanelHeader';
import PaymentData from '@ro/PaymentData.json';

const Payments: FC = () => {
  const [view, setView] = useState<string>('plati');
  const { categories } = PaymentData;

  return (
    <div className="h-[473px]  col-span-6 ">
      <PanelHeader categories={categories} setView={setView} view={view} />

      <div className="w-full h-full bg-white rounded-b-4xl rounded-tr-4xl"></div>
    </div>
  );
};

export default Payments;
