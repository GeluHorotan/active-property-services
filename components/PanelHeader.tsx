import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';
import { ICategory } from '@/types/INotifications';

interface IPanelHeader {
  categories: ICategory[];
  setView: React.Dispatch<React.SetStateAction<number>>;
  view: number;
}

const PanelHeader: FC<IPanelHeader> = ({ categories, setView, view }) => {
  return (
    <div className="flex w-full gap-[5px]">
      {categories?.map((category, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setView(category.filterBy);
            }}
            className={` ${
              category.filterBy === view ? 'bg-white' : 'bg-custom_blue-300'
            } w-[152px] cursor-pointer h-[43px]  rounded-t-[15px] flex items-center gap-[6.7px] justify-center transition-all ease-in-out duration-200`}
          >
            {category.iconName && (
              <IconFinder
                name={category.iconName}
                className={`${
                  category.filterBy === view ? 'fill-[#0B1023]' : 'fill-white'
                }`}
                size={17}
              />
            )}
            <h5
              className={` ${
                category.filterBy === view
                  ? 'font-medium text-[#0B1023]'
                  : 'font-normal text-white'
              }  leading-[25px] transition-all ease-in-out duration-200 `}
            >
              {category.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default PanelHeader;
