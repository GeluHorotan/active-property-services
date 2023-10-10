import { FC } from 'react';

const TabelHead: FC = () => {
  return (
    <thead className={`  `}>
      <tr className=" whitespace-nowrap bg-[#F6F6F6]  h-[75px]">
        {' '}
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-5  pr-[81px] ">
          Status
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[75px]  ">
          Nume
        </th>
        <th className="text-left   text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[44px] ">
          Strada
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[44px] ">
          Nr.
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-28  ">
          Oras
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[65px] ">
          Tip Prop.
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[61px] ">
          Proprietar
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal  pr-[22px] ">
          Tichete in lucru
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[122px] ">
          Chirias
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
