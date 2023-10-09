import Actions from '@components/Actions';
import Notifications from '@components/Notifications';
import Payments from '@components/Payments';
import Statistics from '@components/Statistics';

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px] mt-3">
      <div className="flex  justify-between   ">
        <h3 className="font-semibold text-custom_gray-900">Dashboard</h3>
        <input type="text" placeholder="Cautare" className="p-2 rounded-lg" />
      </div>

      <div className=" w-full h-full grid grid-cols-13 grid-rows-12   gap-5">
        <Actions />
        <Notifications />

        <Payments />
        <Statistics />

        <div className="h-[473px] bg-white col-span-13 rounded-[10px] min-w-full  ">
          <div className="flex ">
            <div className="flex flex-col items-start  w-[23%]">
              <div className="text-left h-[75px] bg-[#F6F6F6]  w-full flex p-5 items-center text-[#4C5870] leading-[21px] text-[14px] font-normal">
                Denumire proprietate
              </div>
              <div className="text-left h-[100px]  w-full p-5 flex items-start flex-col border-t-[1px] border-b-[1px] border-[#EAEEF7]">
                <h5 className="font-semibold leading-[25px]  text-custom_gray-900">
                  {' '}
                  Apartament, Siriului 12
                </h5>
                <p className=" text-[#B2B2BE] font-normal leading-[21px]">
                  # 121 212
                </p>
              </div>
            </div>
            <div className="w-full overflow-x-auto ">
              <table className=" w-full    ">
                <thead className="border-t-[1px] border-b-[1px] border-[#EAEEF7] ">
                  <tr className=" whitespace-nowrap bg-[#F6F6F6]  h-[75px]">
                    {' '}
                    <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-5 pr-[81px] ">
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
