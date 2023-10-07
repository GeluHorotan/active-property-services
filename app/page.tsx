import QuickAction from '@components/QuickAction';
import QuickActionData from '@ro/QuickActionData.json';

export default function Home() {
  const { cards } = QuickActionData;
  console.log(cards);
  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex  justify-between  ">
        <h3 className="font-semibold text-custom_gray-900">Dashboard</h3>
        <input type="text" placeholder="Cautare" className="p-2 rounded-lg" />
      </div>

      <div className=" w-full h-full grid grid-cols-13  gap-5">
        <div className=" col-span-5  ">
          <div className="flex items-center flex-wrap gap-5 ">
            <div className=" w-full h-[181px]  rounded-lg flex items-center justify-between gap-5">
              {cards.map((card, i) => {
                return <QuickAction key={i} card={card}></QuickAction>;
              })}
              <div className="w-1/2 h-full bg-white rounded-[20px]">Y</div>
            </div>
            <div className="w-full h-[181px] bg-blue-400 rounded-lg">Y</div>
            <div className=" w-full h-[120px] bg-blue-400 rounded-lg">Y</div>
          </div>
        </div>
        <div className=" h-[522px] bg-blue-400 col-span-8">T</div>
        <div className="h-[473px] bg-blue-400 col-span-full ">Y</div>
      </div>
    </div>
  );
}
