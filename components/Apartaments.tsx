'use client';
import { FC } from 'react';
import FixedTabelColumn from '@components/FixedTabelColumn';

import TabelBody from '@components/TabelBody';
import TabelHead from '@components/TabelHead';

import ApartamentData from '@ro/ApartamentData.json';

const Apartaments: FC = () => {
  const { apartaments_data } = ApartamentData;
  const { tabel } = apartaments_data;
  return (
    <div className="h-max py-8 bg-white col-span-13 rounded-[10px] min-w-full  ">
      {/* Whole Tabel */}
      <div className="flex ">
        <FixedTabelColumn fixedColumn={apartaments_data.fixed_column} />

        {/* Scrollable Area */}
        <div className="w-full overflow-x-auto scrollbar-hide ">
          {/* Table */}
          <table className=" w-full    ">
            {/* Thead only one */}
            <TabelHead />
            {/* Tbody - I need this multiple times */}
            {tabel?.tabel_body?.map((tbody, i) => {
              return <TabelBody key={i} data={tbody} />;
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Apartaments;
