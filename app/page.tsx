import Actions from '@components/Actions';
import FixedTabelColumn from '@components/FixedTabelColumn';
import Notifications from '@components/Notifications';
import Payments from '@components/Payments';
import Statistics from '@components/Statistics';
import TabelBody from '@components/TabelBody';
import TabelHead from '@components/TabelHead';

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

        {/* Whole Container */}
        <div className="h-[473px] bg-white col-span-13 rounded-[10px] min-w-full  ">
          {/* Whole Tabel */}
          <div className="flex ">
            <FixedTabelColumn />

            {/* Scrollable Area */}
            <div className="w-full overflow-x-auto ">
              {/* Table */}
              <table className=" w-full    ">
                {/* Thead only one */}
                <TabelHead />
                {/* Tbody - I need this multiple times */}
                <TabelBody></TabelBody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
