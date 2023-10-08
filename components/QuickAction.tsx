import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';
import Button from '@components/Button';
import { IAction } from '@/types/IActions';

interface IQuickAction {
  action: IAction;
  isSingleEntry?: boolean;
}

const QuickAction: FC<IQuickAction> = ({ action, isSingleEntry }) => {
  return (
    <div className="pb-5 px-[25px] pt-[18px]  bg-white rounded-4xl flex-col gap-3 flex items-center justify-center">
      {/* Title */}
      <div className="w-full flex justify-between  items-center  ">
        <h6 className="font-semibold text-custom_gray-700 leading-[25px]">
          {action?.title}
        </h6>
        <div className=" justify-end flex ">
          <IconFinder name={action?.iconName} className="fill-[#ccc]" />
        </div>
      </div>
      <div
        className={` w-full grid grid-cols-12 ${
          isSingleEntry ? 'grid-rows-1' : 'grid-rows-2'
        }  items-center gap-y-4   `}
      >
        {/* Cards */}
        {action?.entries.map((entry: any, i: number) => {
          return (
            <div key={i} className="   col-span-6 items-start  ">
              <div className="flex gap-1 ">
                <h6
                  className={`font-semibold text-[30px]  leading-[30px] ${
                    entry.highlight
                      ? 'text-custom_red-700'
                      : 'text-custom-gray-900'
                  }`}
                >
                  {entry.data_number}
                </h6>
                {entry.data_unit && (
                  <div className="font-normal text-[10px] leading-[16px]  self-end ">
                    {entry.data_unit}
                  </div>
                )}
              </div>

              <p className="font-light text-[12px] whitespace-nowrap leading-[18px] ">
                {entry.data_desc}
              </p>
            </div>
          );
        })}
        {/* Footer */}
        <Button
          className="col-span-6  leading-[18px]"
          icon={<IconFinder name={'Plus'} size={16} />}
        >
          {action?.action_name}
        </Button>
      </div>
    </div>
  );
};

export default QuickAction;
