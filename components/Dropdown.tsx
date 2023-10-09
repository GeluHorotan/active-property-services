'use client';
import { FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

interface IDropdown {
  title: string;
  items: {
    title: string;
  }[];
}

const Dropdown: FC<IDropdown> = ({ items, title }) => {
  return (
    <Menu as="div" className={'relative col-span-4 origin-center '}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`${
              open && 'rounded-b-none'
            } px-5 w-full py-[15px] duration-100 ease-out transition-all flex items-center justify-between rounded-[10px] ui-open:rounded-b-none border-[0.5px] bg-white border-custom_gray-700`}
          >
            <p className="font-normal leading-[21px] text-custom_gray-400">
              {title}
            </p>
            <IoIosArrowDown
              className={`${open && 'rotate-180'}`}
              color="#575757"
            />
          </Menu.Button>
          <Transition
            enter="transition duration-300 ease-out transform-gpu "
            enterFrom="transform-gpu scale-y-0"
            enterTo="transform-gpu scale-y-100"
            leave="transition duration-75 ease-out transform-gpu"
            leaveFrom="transform-gpu scale-y-100"
            leaveTo="transform-gpu scale-y-0"
          >
            <Menu.Items
              className={
                '  rounded-b-[10px]  cursor-pointer w-full border-[0.5px] border-t-0 bg-white border-custom_gray-700  absolute top-full flex flex-col '
              }
            >
              {items?.map((item, i) => {
                return (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        className={`${
                          active && 'bg-[#F1EFFD]'
                        } text-[14px] cursor-pointer text-ellipsis font-normal overflow-hidden whitespace-nowrap leading-[21px] text-custom_gray-900 px-[18px] py-2 `}
                      >
                        {item.title}
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
