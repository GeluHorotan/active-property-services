import { FC } from 'react';
import navigationData from '@ro/navigationData.json';
import Logo from '@/components/svgs/Logo';
import Link from 'next/link';
import IconFinder from '@icons/IconFinder';
import { INavigation } from '@/types/INavigation';

const Navigation: FC = () => {
  const { main_buttons, secondary_buttons }: INavigation = navigationData;
  return (
    <nav className=" w-full h-full  px-3 pt-6 pb-9 flex items-center justify-between  bg-custom_blue-300 rounded-[20px] flex-col  text-[#fff] text-base ">
      <div className="flex flex-col items-start gap-16  w-full relative">
        <div className="absolute ringShadow -right-7 top-12 rounded-full flex items-center w-8 h-8 justify-center bg-[#FFF]  ">
          <IconFinder
            name={'ArrowToLeft'}
            className="fill-blue-200 "
            size={12}
          />
        </div>
        <div className="w-full px-7     flex">
          <Logo />
        </div>
        <div className="flex flex-col gap-2 items-start  w-full    ">
          {main_buttons?.map((btn, i) => {
            return (
              <div
                key={i}
                className={`rounded-2xl py-3 px-5 flex gap-5 w-full justify-between items-center  pointer-events-none hover:bg-[#5F76C7] duration-300 ease-out transition-all ${
                  btn?.isGreen ? 'bg-[#079348]' : ''
                } `}
              >
                <div className="w-full justify-between   items-center flex  pointer-events-auto cursor-pointer  ">
                  <div className=" w-full grid grid-cols-6 gap-10 items-center ">
                    <IconFinder name={btn?.iconName} />
                    <Link
                      href={'#'}
                      key={i}
                      className="font-medium text-[15px]  col-span-5  "
                    >
                      {btn?.title}
                    </Link>
                  </div>

                  {btn?.isExtendable && <IconFinder name={'ArrowToRight'} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  items-start gap-9  w-full ">
        {secondary_buttons?.map((btn, i) => {
          return (
            <div
              key={i}
              className="rounded-2xl  px-5 w-full pointer-events-none text-[#fff]  hover:text-[#5F76C7] flex gap-5 duration-300 ease-out transition-all"
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
