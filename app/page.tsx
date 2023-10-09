import Actions from '@components/Actions';
import Apartaments from '@components/Apartaments';
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
        <Apartaments />
      </div>
    </div>
  );
}
