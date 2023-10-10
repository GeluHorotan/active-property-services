import { FC } from 'react';

interface IFixedTabelColumn {
  fixedColumn: any;
}

const FixedTabelColumn: FC<IFixedTabelColumn> = ({ fixedColumn }) => {
  return (
    <div className="flex flex-col items-start  w-[20%] border-r-2 ">
      <div className="text-left h-[75px] bg-[#F6F6F6]  w-full flex p-5 items-center text-[#4C5870] leading-[21px] text-[14px] font-normal shadow-[10px_0px_10px_-10px_rgba(0,0,0,1)]">
        {fixedColumn.head_title}
      </div>
      {fixedColumn?.entries.map((entry: any, i: number) => {
        return (
          <div
            key={i}
            className="text-left h-[100px]  w-full p-5 flex items-start flex-col border-t-[1px] border-b-[1px] border-[#EAEEF7]  "
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
