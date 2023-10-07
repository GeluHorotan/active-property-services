import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';
import Button from '@components/Button';

interface IQuickAction {
  card: any;
}

const QuickAction: FC<IQuickAction> = ({ card }) => {
  return (
    <div className="w-full h-max  pb-5 px-5 pt-4  bg-white rounded-[20px] flex items-center justify-center">
      <div className={`w-full  grid grid-cols-12 grid-rows-3  items-center `}>
        <div className="w-full flex justify-between col-span-10">
          <h6 className="font-semibold">{card?.title}</h6>
          <div className=" justify-end flex ">
            <IconFinder
              name={card?.iconName}
              className="fill-[#ccc]"
            ></IconFinder>
          </div>
        </div>
        {card?.entries.map((entry: any, i: number) => {
          return (
            <div key={i} className="flex flex-col col-span-6 items-start  ">
              <div className="flex gap-1 ">
                <h6
                  className={`font-semibold text-[30px] leading-6 ${
                    entry.highlight
                      ? 'text-custom_red-700'
                      : 'text-custom-gray-900'
                  }`}
                >
                  {entry.data_number}
                </h6>
                {entry.data_unit && (
                  <div className="font-regular text-[10px]   self-end">
                    {entry.data_unit}
                  </div>
                )}
              </div>

              <p className="font-light text-[12px] ">{entry.data_desc}</p>
            </div>
          );
        })}

        <Button
          className="col-span-6 w-full "
          icon={<IconFinder name={'Plus'} />}
        >
          {card?.action_name}
        </Button>
      </div>
    </div>
  );
};

export default QuickAction;
