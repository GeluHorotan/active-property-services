import { FC } from 'react';
import IconFinder from './svgs/icons/IconFinder';

interface IPanelHeader {
  categories: {
    title: string;
    iconName?: string | undefined;
    identifier: string;
  }[];
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
}

const PanelHeader: FC<IPanelHeader> = ({ categories, setFilterOption }) => {
  return (
    <div className="flex w-full gap-[5px]">
      {categories?.map((category, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setFilterOption(category.identifier);
            }}
            className="w-[152px] h-[43px] bg-blue-400 rounded-t-[15px] flex items-center gap-[6.7px] justify-center"
          >
            {category.iconName && (
              <IconFinder name={category.iconName} size={17} />
            )}
            <h5 className="font-medium leading-[25px] text-white">
              {category.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default PanelHeader;
