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
import Button from './Button';
import IconFinder from './svgs/icons/IconFinder';

const Apartaments: FC = () => {
  const { apartaments_data } = ApartamentData;
  const {
    tabel_data,
    filter_by_status,
    filter_by_owner,
    filter_by_type,
    filter_by_property,
    // dropdown_default_values,
  } = apartaments_data;

  const [apartaments, setApartaments] = useState(tabel_data);

  const [activeStatus, setActiveStatus] = useState<number>(1);
  // const [activeProperty, setActiveProperty] = useState<string>(
  //   dropdown_default_values[0]?.value
  // );
  // const [activeOwner, setActiveOwner] = useState<string>(
  //   dropdown_default_values[1]?.value
  // );
  // const [activeType, setActiveType] = useState<string>(
  //   dropdown_default_values[2]?.value
  // );

  const [activeApartament, setActiveApartament] = useState<number>(0);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const { events } = useDraggable(ref);

  const resetState = () => {
    setActiveStatus(1);
    // setActiveProperty(dropdown_default_values[0]?.value);
    // setActiveOwner(dropdown_default_values[1]?.value);
    // setActiveType(dropdown_default_values[2]?.value);
  };

  return (
    <div className="h-max pb-[29px] bg-white col-span-13 rounded-[10px] min-w-full  ">
      {/* Whole Tabel */}

      <div className="flex flex-col ">
        <div className=" px-5 py-5 flex justify-between">
          <div className="flex gap-[12px] items-center">
            <h4 className="font-semibold text-custom_gray-900">
              Portofoliu Proprietati
            </h4>
            <div className="bg-custom_blue-100 rounded-2xl px-[18px] py-[7px] text-[13px] ">
              <span>25 proprietati</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button className="text-[16px] border-none rounded-[10px] items-center bg-[#079348] py-[14px] px-[28px] leading-[25px] text-custom_gray-50 font-normal gap-[8.5px]">
              <IconFinder name="SecondPlus" />
              Adauga proprietate
            </Button>
            <Button className="text-[16px] border-[0.5px] border-custom_gray-700  rounded-[10px] items-center  py-[14px] px-[28px] leading-[25px]  font-normal gap-[8.5px] text-custom_gray-700">
              <IconFinder
                name="Download"
                className="fill-custom-gray-700"
                size={15}
              />
              Exporta raport
            </Button>
          </div>
        </div>
        <div className="w-full bg-custom_purple-800 h-[1px]" />
      </div>
      <div className="w-full flex flex-col ">
        <div className="w-full  p-5 flex gap-[15px]">
          <div className="flex [&>*:last-child]:rounded-r-[10px] [&>*:first-child]:rounded-l-[10px]">
            {filter_by_status?.map((filter, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setActiveStatus(filter.identifier);
                    if (filter.identifier === 1) {
                      setApartaments(tabel_data);
                    } else {
                      const filtered = tabel_data?.filter((apartament) =>
                        filter.empty
                          ? apartament.tenant === '-'
                          : apartament.tenant !== '-'
                      );
                      setApartaments(filtered);
                    }
                  }}
                  className={`${
                    activeStatus === filter.identifier
                      ? 'border-custom_blue-300  border-[1px] bg-custom_blue-300 text-white'
                      : 'border-custom_purple-400  border-[0.5px] bg-white text-gray-700'
                  } cursor-pointer px-[35.5px] py-[15px]  `}
                >
                  <span className="text-[14px] font-normal leading-[21px]    ">
                    {filter?.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="items-center w-full flex gap-5 ">
            <Dropdown isOverflow title={'Proprietate'}>
              {filter_by_property?.map((property, i) => {
                return (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        onClick={() => {
                          setActiveStatus(1);
                          // setActiveProperty(property?.name);
                          const filtered = tabel_data?.filter((apartament) =>
                            apartament.name.includes(property.identifier)
                          );
                          setApartaments(filtered);
                        }}
                        className={`${
                          active && 'bg-[#F1EFFD]'
                        }  text-[14px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap  font-normal   leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                      >
                        {property?.name}
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </Dropdown>
            <Dropdown isOverflow title={'Proprietar'}>
              {filter_by_owner?.map((owner, i) => {
                return (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        className={`${
                          active && 'bg-[#F1EFFD]'
                        } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                        onClick={() => {
                          setActiveStatus(1);
                          // setActiveOwner(owner?.name);
                          const filtered = tabel_data?.filter(
                            (apartament) => apartament?.owner === owner?.name
                          );

                          setApartaments(filtered);
                        }}
                      >
                        {owner?.name}
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </Dropdown>
            <Dropdown title={'Tip Proprietate'}>
              {filter_by_type?.map((type, i) => {
                return (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        className={`${
                          active && 'bg-[#F1EFFD]'
                        } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2  `}
                        onClick={() => {
                          setActiveStatus(1);
                          // setActiveType(type?.title);
                          const filtered = tabel_data?.filter(
                            (apartament) =>
                              apartament?.type === type?.identifier
                          );

                          setApartaments(filtered);
                        }}
                      >
                        {type?.title}
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
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
            resetState={resetState}
            setApartaments={setApartaments}
            tabel_data={tabel_data}
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
            {/* tabel */}
            <table className=" w-full    ">
              {/* Thead only one */}
              <TabelHead
                resetState={resetState}
                setApartaments={setApartaments}
                tabel_data={tabel_data}
              />
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
