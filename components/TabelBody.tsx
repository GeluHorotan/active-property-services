import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';

interface ITabelBody {
  data: any;
}

const TabelBody: FC<ITabelBody> = ({ data }) => {
  const {
    status,
    name,
    address,
    number,
    city,
    type,
    owner,
    tickets,
    tenant,
    phone,
    contact,
  } = data;

  return (
    <tbody className="  border-t-[1px] border-b-[1px] border-[#EAEEF7]">
      <tr className="h-[100px] ">
        <td className=" whitespace-nowrap p-5">
          <div className="bg-custom_green-50 px-[15px] flex items-center justify-start w-max py-[6px] rounded-[16px] gap-[7px]">
            <span className="w-2 h-2 bg-custom_green-600 rounded-full" />
            <span className="text-[14px] font-normal leading-[21px] text-custom_green-600">
              {status}
            </span>
          </div>
        </td>
        <td className=" p-5">
          <span className="text-[14px] font-medium leading-[21px] text-[#0B1023] ">
            {name}
          </span>
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-[#0B1023] whitespace-nowrap p-5">
          {address}
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-[#0B1023] whitespace-nowrap p-5">
          {number}
        </td>
        <td className="  whitespace-nowrap p-5">
          <span className="text-[14px] font-medium text-custom_blue-500 px-[15px] py-[6px] rounded-2xl bg-custom_purple-50  leading-[21px]">
            {city}
          </span>
        </td>
        <td className=" p-5">
          <span className="text-[14px] font-medium leading-[21px]  text-custom_purple-200 bg-custom_orange-50 py-[6px] rounded-[16px] px-[15px]">
            {type}
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <span className="text-[14px] font-medium leading-[21px]  text-[#0B1023] bg-[#F1F1F1] py-[6px] rounded-[16px] pl-[15px] pr-[18px]">
            {owner}
          </span>
        </td>
        <td className=" whitespace-nowrap  w-max  ">
          <div className="flex items-center gap-[6px]">
            {tickets?.map((ticket: any, i: number) => {
              return (
                <div
                  key={i}
                  className="flex rounded-[16px] items-center gap-[7px] py-[6px] px-[10px] bg-[#F1F1F1] w-[57px] h-[32px] justify-center"
                >
                  {ticket.iconName && (
                    <IconFinder
                      size={13}
                      className="fill-[#0B1023]"
                      name={ticket.iconName}
                    />
                  )}
                  <span className="font-medium text-[14px] leading-[21px] text-[#0B1023]">
                    {ticket?.number}
                  </span>
                </div>
              );
            })}
          </div>
        </td>
        <td className=" whitespace-nowrap p-5">
          <span className="bg-custom_green-50 px-[18px] py-[5px] rounded-2xl text-[14px] leading-[21px] font-medium text-[#0B1023]">
            {tenant}
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <div className="flex flex-col">
            {phone?.map(
              (ph: { number: string; iconName: string }, i: number) => {
                return (
                  <div key={i} className="flex items-center gap-[10px]">
                    P
                    <span className="font-normal text-[14px] leading-[21px] text-custom_blue-700">
                      {ph.number}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </td>
        <td className="text-left p-5">
          <div className="flex flex-col items-start gap-[6px] ">
            {contact.map((form: any, i: number) => {
              return (
                <div key={i} className="flex items-center gap-[7px]">
                  {' '}
                  E
                  <span className="leading-[21px] text-[14px] font-normal text-[#0B1023]">
                    {form.address}
                  </span>
                </div>
              );
            })}
          </div>
        </td>
        <td className=" p-5 content-center ">
          <span className="px-[7px]  py-[6px] bg-[#CCD9F1] rounded-full w-7 h-7 flex items-center justify-center">
            D
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default TabelBody;
