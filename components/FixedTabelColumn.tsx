import { FC } from 'react';

const FixedTabelColumn: FC = () => {
  return (
    <div className="flex flex-col items-start  w-[23%] border-r-2 ">
      <div className="text-left h-[75px] bg-[#F6F6F6]  w-full flex p-5 items-center text-[#4C5870] leading-[21px] text-[14px] font-normal shadow-[10px_0px_10px_-10px_rgba(0,0,0,1)]">
        Denumire proprietate
      </div>
      <div className="text-left h-[100px]  w-full p-5 flex items-start flex-col border-t-[1px] border-b-[1px] border-[#EAEEF7]  ">
        <h5 className="font-semibold leading-[25px]  text-custom_gray-900">
          {' '}
          Apartament, Siriului 12
        </h5>
        <p className=" text-[#B2B2BE] font-normal leading-[21px]"># 121 212</p>
      </div>
    </div>
  );
};

export default FixedTabelColumn;
