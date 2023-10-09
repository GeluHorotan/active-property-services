import { FC } from 'react';

import QuickAction from '@components/QuickAction';
import QuickActionData from '@ro/QuickActionData.json';
import { IAction, IQuickActions } from '@/types/IActions';

const Actions: FC = () => {
  const { quick_actions }: IQuickActions = QuickActionData;
  return (
    <div className="col-span-6  ">
      <div className="flex items-center gap-5  ">
        <div className=" w-full grid grid-cols-2 h-full  gap-5 items-center justify-between ">
          {quick_actions.map((action: IAction, i: number) => {
            return (
              <QuickAction
                isSingleEntry={action?.entries?.length === 1 ? true : false}
                key={i}
                action={action}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Actions;
