import { FC } from 'react';

const TabelBody: FC = () => {
  return (
    <tbody className="">
      <tr className="h-[100px] ">
        <td className=" whitespace-nowrap p-5">
          <div className="bg-custom_green-50 px-[15px] flex items-center justify-center py-[6px] rounded-[16px] gap-[7px]">
            <span className="w-2 h-2 bg-custom_green-600 rounded-full"></span>
            <span className="text-[14px] font-normal leading-[21px] text-custom_green-600">
              Inchiriat
            </span>
          </div>
        </td>
        <td className=" p-5">
          <span className="text-[14px] font-medium leading-[21px] text-[#0B1023] ">
            Apartament Siriului
          </span>
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-[#0B1023] whitespace-nowrap p-5">
          Str Siriului
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-[#0B1023] whitespace-nowrap p-5">
          8
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-custom_blue-600 whitespace-nowrap p-5">
          Constanta
        </td>
        <td className=" p-5">
          <span className="text-[14px] font-medium leading-[21px]  text-custom_purple-200 bg-custom_orange-50 py-[6px] rounded-[16px] px-[15px]">
            Apartament
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <span className="text-[14px] font-medium leading-[21px]  text-[#0B1023] bg-[#F1F1F1] py-[6px] rounded-[16px] pl-[15px] pr-[18px]">
            Vasile Popescu
          </span>
        </td>
        <td className=" whitespace-nowrap  w-max">
          <div className="flex items-center gap-[6px]">
            <div className="flex rounded-[16px] items-center gap-[7px] py-[6px] px-[10px] bg-[#F1F1F1] w-[57px] h-[32px] justify-center">
              Y
              <span className="font-medium text-[14px] leading-[21px] text-[#0B1023]">
                10
              </span>
            </div>
            <div className="flex rounded-[16px] items-center gap-[7px] py-[6px] px-[10px] bg-[#F1F1F1] w-[57px] h-[32px] justify-center">
              X
              <span className="font-medium text-[14px] leading-[21px] text-[#0B1023]">
                3
              </span>
            </div>
          </div>
        </td>
        <td className=" whitespace-nowrap p-5">
          <span className="bg-custom_green-50 px-[18px] py-[5px] rounded-2xl text-[14px] leading-[21px] font-medium text-[#0B1023]">
            Ion Gheorghe
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <div className="flex items-center gap-[10px]">
            P
            <span className="font-normal text-[14px] leading-[21px] text-custom_blue-700">
              0724 111 555
            </span>
          </div>
        </td>
        <td className=" bg-blue-400 p-5">
          <div className="flex flex-col items-center gap-[6px] ">
            <div className="flex items-center gap-[7px]">
              {' '}
              E
              <span className="leading-[21px] text-[14px] font-normal text-[#0B1023]">
                oxymoron365
              </span>
            </div>
            <div className="flex items-center gap-[7px]">
              {' '}
              E
              <span className="leading-[21px] text-[14px] font-normal text-[#0B1023]">
                oxymoron365
              </span>
            </div>
          </div>
        </td>
        <td className=" p-5 bg-red-400">
          <span className="px-[7px]  py-[6px] bg-[#CCD9F1] rounded-full w-7 h-7">
            D
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default TabelBody;
