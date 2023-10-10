import { ITabelData } from '@/types/IApartament';
import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface ITabelHead {
  // To be fixed later ITabelData

  tabel_data: any;
  setApartaments: React.Dispatch<React.SetStateAction<ITabelData[]>>;
  resetState: () => void;
}

interface SortOrders {
  status: 'ascending' | 'descending';
  name: 'ascending' | 'descending';

  [column: string]: 'ascending' | 'descending';
}

const TabelHead: FC<ITabelHead> = ({
  tabel_data,
  setApartaments,
  resetState,
}) => {
  const [sortOrders, setSortOrders] = useState<SortOrders>({
    status: 'ascending',
    name: 'ascending',
    type: 'ascending',
    owner: 'ascending',
    tenant: 'ascending',
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
    <thead className={`  `}>
      <tr className=" whitespace-nowrap bg-[#F6F6F6]  h-[75px]">
        <th
          className="text-left cursor-pointer  text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-8  pr-[81px] "
          onClick={() => handleSortClick('status')}
        >
          <div className="flex gap-[10px] items-center">
            Status
            <IoIosArrowDown
              size={16}
              color="#4C5870"
              className={`${
                sortOrders['status'] === 'ascending' ? '' : 'rotate-180'
              }`}
            />
          </div>
        </th>
        <th
          onClick={() => handleSortClick('name')}
          className="text-left cursor-pointer text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[75px]  "
        >
          <div className="flex gap-[10px] items-center  z-20">
            Nume
            <IoIosArrowDown
              className={`${
                sortOrders['name'] === 'ascending' ? '' : 'rotate-180'
              }`}
              size={16}
              color="#4C5870"
            />
          </div>
        </th>
        <th className="text-left    text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[80px] ">
          Strada <span className="pl-[10px]">Nr.</span>
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal   pr-28  ">
          Oras
        </th>
        <th
          className="text-left cursor-pointer  text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[65px] "
          onClick={() => handleSortClick('type')}
        >
          <div className="flex gap-[10px] items-center">
            Tip Prop.
            <IoIosArrowDown
              className={`${
                sortOrders['type'] === 'ascending' ? '' : 'rotate-180'
              }`}
              size={16}
              color="#4C5870"
            />
          </div>
        </th>
        <th
          className="text-left cursor-pointer text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[61px] "
          onClick={() => handleSortClick('owner')}
        >
          <div className="flex gap-[10px] items-center">
            Proprietar
            <IoIosArrowDown
              className={`${
                sortOrders['owner'] === 'ascending' ? '' : 'rotate-180'
              }`}
              size={16}
              color="#4C5870"
            />
          </div>
        </th>
        <th className="text-left  text-[#4C5870] leading-[21px] text-[14px] font-normal    px-[23px] ">
          Tichete in lucru
        </th>
        <th
          onClick={() => handleSortClick('tenant')}
          className="text-left  cursor-pointer text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[122px] "
        >
          <div className="flex gap-[10px] items-center">
            Chirias
            <IoIosArrowDown
              className={`${
                sortOrders['tenant'] === 'ascending' ? '' : 'rotate-180'
              }`}
              size={16}
              color="#4C5870"
            />
          </div>
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal  pl-5 pr-[109px] ">
          Telefon
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5 pr-[69px] ">
          Email / site
        </th>
        <th className="text-left text-[#4C5870] leading-[21px] text-[14px] font-normal pl-5  ">
          Act prop.
        </th>
      </tr>
    </thead>
  );
};

export default TabelHead;
