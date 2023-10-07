import { FC } from 'react';
import navigationData from '@ro/navigationData.json';
import Logo from '@/components/svgs/Logo';
import Link from 'next/link';
import IconFinder from '@icons/IconFinder';

const Navigation: FC = () => {
  const { main_buttons, secondary_buttons } = navigationData;
  return (
    <nav className=" w-[15%] px-3 py-6 flex items-center justify-between gap-[90px] bg-blue-300 rounded-[20px] flex-col  text-[#fff] text-base ">
      <div className="flex flex-col items-start gap-16 w-full ">
        <div className="w-full px-7  flex">
          <Logo />
        </div>
        <div className="flex flex-col gap-2 items-start  w-full    ">
          {main_buttons?.map((btn, i) => {
            return (
              <div
                key={i}
                className="rounded-2xl py-3 px-5 flex gap-5 w-full   pointer-events-none hover:bg-[#5F76C7] duration-300 ease-out transition-all"
              >
                <IconFinder name={btn?.iconName} />
                <Link
                  href={'#'}
                  key={i}
                  className="font-medium  pointer-events-auto w-full  "
                >
                  {btn?.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  items-start  w-full ">
        {secondary_buttons?.map((btn, i) => {
          return (
            <div
              key={i}
              className="rounded-2xl py-4 px-5 w-full pointer-events-none text-[#fff]  hover:text-[#5F76C7] flex gap-5 duration-300 ease-out transition-all"
            >
              <IconFinder name={btn?.iconName}></IconFinder>

              <Link
                href={'#'}
                key={i}
                className="font-medium pointer-events-auto"
              >
                {btn?.title}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
