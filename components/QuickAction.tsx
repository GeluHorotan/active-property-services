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
    <div className="pb-5 px-5 pt-4  bg-white rounded-[20px] flex-col gap-3 flex items-center justify-center">
      {/* Title */}
      <div className="w-full flex justify-between  items-center  ">
        <h6 className="font-semibold text-custom_gray-700">{action?.title}</h6>
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
                  className={`font-semibold text-[30px]  leading-6 ${
                    entry.highlight
                      ? 'text-custom_red-700'
                      : 'text-custom-gray-900'
                  }`}
                >
                  {entry.data_number}
                </h6>
                {entry.data_unit && (
                  <div className="font-regular text-[10px]   self-end ">
                    {entry.data_unit}
                  </div>
                )}
              </div>

              <p className="font-light text-[12px] whitespace-nowrap  ">
                {entry.data_desc}
              </p>
            </div>
          );
        })}
        {/* Footer */}
        <Button
          className="col-span-6  "
          icon={<IconFinder name={'Plus'} size={16} />}
        >
          {action?.action_name}
        </Button>
      </div>
    </div>
  );
};

export default QuickAction;
