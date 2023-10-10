import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';
import { IoIosArrowDown } from 'react-icons/io';

const TabelHead: FC = () => {
  return (
    <thead className={`  `}>
      <tr className=" whitespace-nowrap bg-[#F6F6F6]  h-[75px]">
        {' '}
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-8  pr-[81px] ">
          <div className="flex gap-[10px] items-center">
            Status
            <IoIosArrowDown className={``} size={16} color="#4C5870" />
          </div>
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[75px]  ">
          <div className="flex gap-[10px] items-center">
            Nume
            <IoIosArrowDown className={``} size={16} color="#4C5870" />
          </div>
        </th>
        <th className="text-left    text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[80px] ">
          Strada <span className="pl-[10px]">Nr.</span>
        </th>
        {/* <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[44px] "></th> */}
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal   pr-28  ">
          Oras
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[65px] ">
          <div className="flex gap-[10px] items-center">
            Tip Prop.
            <IoIosArrowDown className={``} size={16} color="#4C5870" />
          </div>
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[61px] ">
          <div className="flex gap-[10px] items-center">
            Proprietar
            <IoIosArrowDown className={``} size={16} color="#4C5870" />
          </div>
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal    px-[23px] ">
          Tichete in lucru
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[122px] ">
          <div className="flex gap-[10px] items-center">
            Chirias
            <IoIosArrowDown className={``} size={16} color="#4C5870" />
          </div>
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-5 pr-[109px] ">
          Telefon
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[69px] ">
          Email / site
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5  ">
          Act prop.
        </th>
      </tr>
    </thead>
  );
};

export default TabelHead;
