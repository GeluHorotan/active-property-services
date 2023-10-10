import Actions from '@components/Actions';
import Apartaments from '@components/Apartaments';
import Notifications from '@components/Notifications';
import Payments from '@components/Payments';
import Statistics from '@components/Statistics';
import IconFinder from '@components/svgs/icons/IconFinder';

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px] mt-3">
      <div className="flex  justify-between   ">
        <h3 className="font-semibold text-custom_gray-900">Dashboard</h3>
        <div className="flex items-center gap-[15px] justify-center  ">
          <div className="py-[12px] pl-[20px] gap-[8.6px] pr-[36px] flex rounded-[12px] bg-white hover:bg-custom_gray-600  cursor-pointer group items-center justify-center transition-all duration-200 ease-out ">
            <IconFinder name="User" className="group-hover:fill-white" />
            <span className="text-[14px] font-medium leading-[21px] text-custom_gray-900 group-hover:text-white">
              Vasile Pop
            </span>
          </div>
          <div className="relative ">
            <input
              type="text"
              placeholder="Cauta"
              className="py-[10px]  pl-[44px] pr-[28px] rounded-[12px] bg-white placeholder:text-custom_gray-900 placeholder:text-[14px] placeholder:font-medium placeholder:leading-[21px] placeholder:z-30"
            />
            <div className="absolute top-1/2 left-4 transform  -translate-y-1/2 ">
              <IconFinder name="MagnifyingGlass" />
            </div>
          </div>
          <div className="w-10 h-10 py-[10px] px-[9px] rounded-full bg-white">
            <IconFinder name="SecondMail" size={22} />
          </div>
        </div>
      </div>

      <div className=" w-full h-full grid grid-cols-13 grid-rows-12   gap-5">
        <Actions />
        <Notifications />

        <Payments />
        <Statistics />
        <Apartaments />
      </div>
    </div>
  );
}
