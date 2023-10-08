import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';

interface IPanelHeader {
  categories: {
    title: string;
    iconName?: string | undefined;
    identifier: string;
  }[];
  setView: React.Dispatch<React.SetStateAction<string>>;
  view: string;
}

const PanelHeader: FC<IPanelHeader> = ({ categories, setView, view }) => {
  return (
    <div className="flex w-full gap-[5px]">
      {categories?.map((category, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setView(category.identifier);
            }}
            className={` ${
              category.identifier === 'toate' ? 'font-medium' : 'font-regular'
            } w-[152px] cursor-pointer h-[43px] bg-blue-400 rounded-t-[15px] flex items-center gap-[6.7px] justify-center`}
          >
            {category.iconName && (
              <IconFinder name={category.iconName} size={17} />
            )}
            <h5
              className={` ${
                category.identifier === view
                  ? 'font-medium text-[#0B1023]'
                  : 'font-regular text-white'
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
