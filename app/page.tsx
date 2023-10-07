import QuickAction from '@components/QuickAction';
import QuickActionData from '@ro/QuickActionData.json';

export default function Home() {
  const { cards } = QuickActionData;

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex  justify-between  ">
        <h3 className="font-semibold text-custom_gray-900">Dashboard</h3>
        <input type="text" placeholder="Cautare" className="p-2 rounded-lg" />
      </div>

      <div className=" w-full h-full grid grid-cols-13  gap-5">
        <div className="col-span-6 ">
          <div className="flex items-center gap-5 ">
            <div className=" w-full grid grid-cols-2  rounded-lg gap-5 items-center justify-between ">
              {cards.map((card, i) => {
                return (
                  <QuickAction
                    isSingleEntry={card.entries.length === 1 ? true : false}
                    key={i}
                    card={card}
                  ></QuickAction>
                );
              })}
            </div>
          </div>
        </div>
        <div className="  bg-blue-400 col-span-7 h-full ">T</div>
        <div className="h-[473px] bg-blue-400 col-span-5 ">Y</div>
        <div className="h-[473px] bg-blue-400 col-span-8 ">Y</div>
      </div>
    </div>
  );
}
