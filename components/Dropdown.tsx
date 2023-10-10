'use client';
import React, { FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { cn } from '@lib/utils';

interface IDropdown {
  title: string;
  isOverflow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Dropdown: FC<IDropdown> = ({
  title,
  children,
  className,
  isOverflow,
}) => {
  return (
    <Menu
      as="div"
      className={cn('relative   col-span-4 origin-center ', className)}
    >
      {({ open, active }) => (
        <>
          <Menu.Button
            className={`${
              open && 'rounded-b-none'
            } px-5 w-full py-[15px] duration-100 ease-out transition-all flex items-center justify-between rounded-[10px] ui-open:rounded-b-none border-[0.5px] gap-[85px] bg-white border-custom_gray-700`}
          >
            <span
              className={`font-normal leading-[21px]  ${
                open ? 'text-custom_gray-400 ' : 'text-custom_gray-700'
              } text-[14px] tranisiton-all   duration-300 ease-out ${
                isOverflow && 'overflow-hidden text-ellipsis whitespace-nowrap'
              }  `}
            >
              {title}
            </span>
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
                '  rounded-b-[10px] [&>*:last-child]:rounded-b-[10px] cursor-pointer w-full border-[0.5px] border-t-0 bg-white border-custom_gray-700  absolute top-full flex flex-col '
              }
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
