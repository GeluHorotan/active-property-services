'use client';
import { useState, useRef, FC } from 'react';
import FixedTabelColumn from '@components/FixedTabelColumn';
import { useDraggable } from 'react-use-draggable-scroll';

// Headless Dropdown
import { Menu } from '@headlessui/react';

import TabelBody from '@components/TabelBody';
import TabelHead from '@components/TabelHead';

import ApartamentData from '@ro/ApartamentData.json';
import Dropdown from './Dropdown';

const Apartaments: FC = () => {
  const { apartaments_data } = ApartamentData;
  const { tabel_data } = apartaments_data;

  const [apartaments, setApartaments] = useState(tabel_data);
  const [activeApartament, setActiveApartament] = useState<number>(0);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const { events } = useDraggable(ref);

  return (
    <div className="h-max py-[29px] bg-white col-span-13 rounded-[10px] min-w-full  ">
      {/* Whole Tabel */}
      <div className="w-full flex flex-col ">
        <div className="w-full  p-5 flex gap-[15px]">
          <div className="flex ">
            <div
              onClick={() => {
                setApartaments(tabel_data);
              }}
              className="cursor-pointer px-[35.5px] py-[15px] border-custom_purple-400 rounded-l-[10px] border-[0.5px] bg-white"
            >
              <span className="text-[14px] font-normal leading-[21px] text-gray-700   ">
                Toate
              </span>
            </div>
            <div
              onClick={() => {
                const filtered = tabel_data?.filter(
                  (apartament) => apartament.tenant === '-'
                );
                setApartaments(filtered);
              }}
              className="cursor-pointer px-[35.5px] py-[15px] border-custom_blue-300  border-[0.5px] bg-custom_blue-300"
            >
              <span className="text-[14px] font-normal leading-[21px] text-white   ">
                Libere
              </span>
            </div>
            <div
              onClick={() => {
                const filtered = tabel_data?.filter(
                  (apartament) => apartament.tenant !== '-'
                );
                setApartaments(filtered);
              }}
              className=" cursor-pointer px-[35.5px] py-[15px] border-custom_purple-400 rounded-r-[10px] border-[0.5px] bg-white"
            >
              <span className="text-[14px] font-normal leading-[21px] text-gray-700   ">
                Inchiriate
              </span>
            </div>
          </div>
          <div className="items-center w-full flex gap-5 ">
            <Dropdown title={'Proprietate'}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Complex Casa 1
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Complex Casa 2
                  </div>
                )}
              </Menu.Item>
            </Dropdown>
            <Dropdown title={'Proprietar'}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Vasile Popescu
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Gheorghe Amariei
                  </div>
                )}
              </Menu.Item>
            </Dropdown>
            <Dropdown title={'Tip Proprietate'}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Apartament 2 camere
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-[#F1EFFD]'
                    } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                  >
                    Casa
                  </div>
                )}
              </Menu.Item>
            </Dropdown>
          </div>
        </div>
        <div className="flex  ">
          <FixedTabelColumn
            setActiveApartament={setActiveApartament}
            activeApartament={activeApartament}
            fixedHead={apartaments_data.fixed_head}
            entries={apartaments.map(({ title, sub_title, identifier }) => ({
              title,
              sub_title,
              identifier,
            }))}
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
              {apartaments?.map((tbody, i) => {
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
