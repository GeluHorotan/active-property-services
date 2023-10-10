import { FC } from 'react';

import IconFinder from '@icons/IconFinder';

interface IFixedTabelColumn {
  fixedColumn: any;
  setActiveApartament: React.Dispatch<React.SetStateAction<number>>;
  activeApartament: number;
}

const FixedTabelColumn: FC<IFixedTabelColumn> = ({
  fixedColumn,
  setActiveApartament,
  activeApartament,
}) => {
  return (
    <div className="flex flex-col items-start  w-[23%] ">
      <div className="text-left h-[75px] bg-[#F6F6F6]  w-full flex p-5 items-center text-[#4C5870] leading-[21px] text-[14px] font-normal customShadow">
        <div className="flex gap-[21px] items-center">
          {fixedColumn.head_title}
          <IconFinder name={'LongArrow'}></IconFinder>
        </div>
      </div>
      {fixedColumn?.entries.map((entry: any, i: number) => {
        return (
          <div
            onClick={() => {
              if (activeApartament !== entry.identifier) {
                setActiveApartament(entry.identifier);
              } else {
                setActiveApartament(0);
              }
            }}
            key={i}
            className={`text-left h-[100px]  w-full p-5 flex items-start flex-col ${
              entry.identifier === activeApartament
                ? 'border-custom_blue-700 border-[2px] border-r-0 rounded-l-[5px]'
                : 'border-t-[1px]  border-b-[1px] border-[#EAEEF7]'
            } transition-all ease-out duration-300  cursor-pointer customShadow`}
          >
            <h5 className="font-semibold leading-[25px]  text-custom_gray-900">
              {' '}
              {entry?.title}
            </h5>
            <span className="text-[14px] text-[#B2B2BE] font-normal leading-[21px]">
              {entry.sub_title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FixedTabelColumn;
