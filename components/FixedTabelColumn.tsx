import { FC, useState } from 'react';

import IconFinder from '@icons/IconFinder';

interface IFixedTabelColumn {
  tabel_data: any;
  setApartaments: React.Dispatch<React.SetStateAction<any>>;
  resetState: () => void;
  entries: any;
  setActiveApartament: React.Dispatch<React.SetStateAction<number>>;
  activeApartament: number;
  fixedHead: string;
}

interface SortOrders {
  title: 'ascending' | 'descending';

  [column: string]: 'ascending' | 'descending';
}
const FixedTabelColumn: FC<IFixedTabelColumn> = ({
  tabel_data,
  setApartaments,
  resetState,
  entries,
  setActiveApartament,
  activeApartament,
  fixedHead,
}) => {
  const [sortOrders, setSortOrders] = useState<SortOrders>({
    title: 'ascending',
  });

  const toggleSortOrder = (column: string) => {
    setSortOrders((prevSortOrders) => ({
      ...prevSortOrders,
      [column]:
        prevSortOrders[column] === 'ascending' ? 'descending' : 'ascending',
    }));
  };

  const handleSortClick = (column: string) => {
    toggleSortOrder(column);

    resetState();

    const sortedData = [...tabel_data].sort((a, b) => {
      const valueA = a[column].toLowerCase();
      const valueB = b[column].toLowerCase();
      const sortOrder = sortOrders[column] === 'ascending' ? 1 : -1;

      return sortOrder * valueA.localeCompare(valueB);
    });

    setApartaments(sortedData);
  };

  return (
    <div className="flex flex-col items-start  w-[23%] ">
      <div
        className="text-left h-[75px] bg-[#F6F6F6] cursor-pointer  w-full flex p-5 items-center text-[#4C5870] leading-[21px] text-[14px] font-normal customShadow "
        onClick={() => handleSortClick('title')}
      >
        <div className="flex gap-[21px] items-center ">
          {fixedHead}
          <IconFinder
            name={'LongArrow'}
            className={`${
              sortOrders['title'] === 'ascending' ? '' : 'rotate-180'
            }`}
          ></IconFinder>
        </div>
      </div>
      {entries?.map((entry: any, i: number) => {
        return (
          <div
            onClick={() => {
              if (activeApartament !== entry.identifier) {
                setActiveApartament(entry.identifier);
              } else {
                setActiveApartament(0);
              }
            }}
            key={i}
            className={`text-left h-[100px]  w-full p-5 flex items-start flex-col ${
              entry.identifier === activeApartament
                ? 'border-custom_blue-700 border-[2px] border-r-0 rounded-l-[5px]'
                : 'border-t-[1px]  border-b-[1px] border-[#EAEEF7]'
            } transition-all ease-out duration-300  cursor-pointer customShadow`}
          >
            <h5 className="font-semibold leading-[25px]  text-custom_gray-900">
              {' '}
              {entry?.title}
            </h5>
            <span className="text-[14px] text-[#B2B2BE] font-normal leading-[21px]">
              {entry?.sub_title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FixedTabelColumn;
