'use client';
import { FC } from 'react';
import FixedTabelColumn from '@components/FixedTabelColumn';

import TabelBody from '@components/TabelBody';
import TabelHead from '@components/TabelHead';

const Apartaments: FC = () => {
  return (
    <div className="h-[473px] bg-white col-span-13 rounded-[10px] min-w-full  ">
      {/* Whole Tabel */}
      <div className="flex ">
        <FixedTabelColumn />

        {/* Scrollable Area */}
        <div className="w-full overflow-x-auto ">
          {/* Table */}
          <table className=" w-full    ">
            {/* Thead only one */}
            <TabelHead />
            {/* Tbody - I need this multiple times */}
            <TabelBody></TabelBody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Apartaments;
