'use client';
import { useState, useRef, FC } from 'react';
import FixedTabelColumn from '@components/FixedTabelColumn';
import { useDraggable } from 'react-use-draggable-scroll';

import TabelBody from '@components/TabelBody';
import TabelHead from '@components/TabelHead';

import ApartamentData from '@ro/ApartamentData.json';

const Apartaments: FC = () => {
  const [activeApartament, setActiveApartament] = useState<number>(0);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const { apartaments_data } = ApartamentData;
  const { tabel } = apartaments_data;
  return (
    <div className="h-max py-[29px] bg-white col-span-13 rounded-[10px] min-w-full  ">
      {/* Whole Tabel */}
      <div className="w-full flex flex-col ">
        <div className="w-full  p-5 flex">
          <div className="flex ">
            <div className=" px-[35.5px] py-[15px] border-custom_purple-400 rounded-l-[10px] border-[0.5px] bg-white">
              <span className="text-[14px] font-normal leading-[21px] text-gray-700   ">
                Toate
              </span>
            </div>
            <div className=" px-[35.5px] py-[15px] border-custom_blue-300  border-[0.5px] bg-custom_blue-300">
              <span className="text-[14px] font-normal leading-[21px] text-white   ">
                Libere
              </span>
            </div>
            <div className=" px-[35.5px] py-[15px] border-custom_purple-400 rounded-r-[10px] border-[0.5px] bg-white">
              <span className="text-[14px] font-normal leading-[21px] text-gray-700   ">
                Inchiriate
              </span>
            </div>
          </div>
        </div>
        <div className="flex  ">
          <FixedTabelColumn
            setActiveApartament={setActiveApartament}
            activeApartament={activeApartament}
            fixedColumn={apartaments_data.fixed_column}
          />

          {/* Scrollable Area */}
          <div
            ref={ref}
            {...events}
            className="w-full overflow-x-auto scrollbar-hide "
          >
            {/* Table */}
            <table className=" w-full    ">
              {/* Thead only one */}
              <TabelHead />
              {/* Tbody - I need this multiple times */}
              {tabel?.tabel_body?.map((tbody, i) => {
                return (
                  <TabelBody
                    setActiveApartament={setActiveApartament}
                    activeApartament={activeApartament}
                    key={i}
                    data={tbody}
                  />
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartaments;
