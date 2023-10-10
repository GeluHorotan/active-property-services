import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';
import { IContact, IPhone, ITabelData, ITicket } from '@/types/IApartament';

interface ITabelBody {
  data: ITabelData;
  setActiveApartament: React.Dispatch<React.SetStateAction<number>>;
  activeApartament: number;
}

const TabelBody: FC<ITabelBody> = ({
  data,
  activeApartament,
  setActiveApartament,
}) => {
  const {
    identifier,
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
    <tbody
      className={`cursor-pointer    ${
        activeApartament === identifier
          ? 'border-custom_blue-700 border-[2px] border-l-0 rounded-r-[5px] '
          : 'border-[#EAEEF7] border-t-[1px] border-b-[1px]'
      } transition-all ease-out duration-300  `}
      onClick={() => {
        if (activeApartament !== identifier) {
          setActiveApartament(identifier);
        } else {
          setActiveApartament(0);
        }
      }}
    >
      <tr className="h-[100px] ">
        <td className=" whitespace-nowrap pl-8 p-5">
          <div
            className={`${
              status === 'Inchiriat'
                ? 'bg-custom_green-50 text-custom_green-600'
                : status === 'Vacant'
                ? 'bg-custom_yellow-50 text-custom_yellow-700'
                : 'bg-custom_purple-600 text-custom_gray-700'
            }  px-[15px] flex items-center justify-start w-max py-[6px] rounded-[16px] gap-[7px]`}
          >
            <span
              className={`${
                status === 'Inchiriat'
                  ? 'bg-custom_green-600'
                  : status === 'Vacant'
                  ? ' bg-custom_yellow-700'
                  : ' bg-custom_gray-700'
              }  w-2 h-2  rounded-full`}
            />
            <span className="text-[14px] font-normal leading-[21px] ">
              {status}
            </span>
          </div>
        </td>
        <td className="pr-[40px] p-5">
          <span className="text-[14px] font-medium leading-[21px] text-[#0B1023] ">
            {name}
          </span>
        </td>
        <td className="text-[14px] font-medium leading-[21px] text-[#0B1023] whitespace-nowrap p-5">
          {address}
          <span className="pl-[10px]"> {number}</span>
        </td>

        <td className="  whitespace-nowrap ">
          <span className="text-[14px] font-medium text-custom_blue-500  rounded-2xl   leading-[21px]">
            {city}
          </span>
        </td>
        <td className=" ">
          <span
            className={` ${
              type === 'Apartament'
                ? 'text-custom_purple-200 bg-custom_orange-50'
                : 'text-custom_blue-500 bg-custom_purple-50'
            } text-[14px] font-medium leading-[21px]    py-[6px] rounded-[16px] px-[15px]`}
          >
            {type}
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <span className="text-[14px] font-medium leading-[21px]  text-[#0B1023] bg-[#F1F1F1] py-[6px] rounded-[16px] pl-[15px] pr-[18px]">
            {owner}
          </span>
        </td>
        <td className=" whitespace-nowrap  w-max  px-[23px] ">
          <div className="flex items-center w-full gap-[6px]">
            {tickets?.map((ticket: ITicket, i: number) => {
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
          <span
            className={`${
              tenant === '-' ? 'bg-custom_red-50' : 'bg-custom_green-50'
            }  px-[18px] py-[5px] rounded-2xl text-[14px] leading-[21px] font-medium text-[#0B1023]`}
          >
            {tenant}
          </span>
        </td>
        <td className=" whitespace-nowrap p-5">
          <div className="flex flex-col  gap-[5px]">
            {phone?.map((ph: IPhone, i: number) => {
              return (
                <div key={i} className="flex items-center gap-[10px]">
                  <IconFinder name={ph.iconName} />
                  <span className="font-normal text-[14px] leading-[21px] text-custom_blue-700">
                    {ph.number}
                  </span>
                </div>
              );
            })}
          </div>
        </td>
        <td className="text-left p-5">
          <div className="flex flex-col items-start gap-[6px] ">
            {contact.map((form: IContact, i: number) => {
              return (
                <div key={i} className="flex items-center gap-[7px]">
                  {' '}
                  <IconFinder name={form.iconName} />
                  <span className="leading-[21px] text-[14px] font-normal text-[#0B1023]">
                    {form.address}
                  </span>
                </div>
              );
            })}
          </div>
        </td>
        <td className=" p-5 content-center ">
          <div className="flex items-center justify-center cursor-pointer">
            <span className="px-[7px]  py-[6px] bg-[#CCD9F1] rounded-full w-7 h-7 flex items-center justify-center">
              <IconFinder name="Paperwork" />
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TabelBody;
