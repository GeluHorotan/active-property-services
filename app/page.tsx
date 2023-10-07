import Actions from '@components/Actions';
import Notifications from '@components/Notifications';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex  justify-between  ">
        <h3 className="font-semibold text-custom_gray-900">Dashboard</h3>
        <input type="text" placeholder="Cautare" className="p-2 rounded-lg" />
      </div>

      <div className=" w-full h-full grid grid-cols-13  gap-5">
        <Actions />
        <Notifications></Notifications>
        <div className="h-[473px] bg-blue-400 col-span-6 "></div>
        <div className="h-[473px] bg-blue-400 col-span-7 ">Y</div>
      </div>
    </div>
  );
}
