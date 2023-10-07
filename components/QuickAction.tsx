import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';

interface IQuickAction {
  card: any;
}

const QuickAction: FC<IQuickAction> = ({ card }) => {
  console.log(card);
  return (
    <div className="w-1/2 h-full p-5  bg-white rounded-[20px] flex items-center justify-center">
      <div className="w-full  grid grid-cols-2 grid-rows-3 gap-4 items-center">
        <div>{card?.title}</div>
        <div className=" justify-end flex ">
          <IconFinder
            name={card?.iconName}
            className="fill-[#ccc]"
          ></IconFinder>
        </div>
        {card?.entries.map((entry: any, i: number) => {
          return (
            <div key={i} className="flex flex-col items-start ">
              <h6
                className={`font-semibold text-[30px] leading-6 ${
                  entry.highlight
                    ? 'text-custom_red-700'
                    : 'text-custom-gray-900'
                }`}
              >
                {entry.data_number}
              </h6>
              <p className="font-light text-[12px]">{entry.data_desc}</p>
            </div>
          );
        })}
        <div>{card?.action_name}</div>
      </div>
    </div>
  );
};

export default QuickAction;
