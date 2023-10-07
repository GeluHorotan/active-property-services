import { FC } from 'react';
import navigationData from '@ro/navigationData.json';
import Logo from '@/components/svgs/Logo';
import Link from 'next/link';
import IconFinder from '@icons/IconFinder';

const Navigation: FC = () => {
  const { main_buttons, secondary_buttons } = navigationData;
  return (
    <nav className=" w-[15%] h-full  px-3 pt-6 pb-9 flex items-center justify-between  bg-blue-300 rounded-[20px] flex-col  text-[#fff] text-base ">
      <div className="flex flex-col items-start gap-16  w-full relative">
        <div className="absolute -right-7 top-12 rounded-full flex items-center w-8 h-8 justify-center bg-[#FFF]  ">
          <IconFinder
            name={'Arrow'}
            className="fill-blue-200"
            size={10}
          ></IconFinder>
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
                  <div className="flex gap-5 items-center  ">
                    <IconFinder name={btn?.iconName} />
                    <Link href={'#'} key={i} className="font-medium  w-full  ">
                      {btn?.title}
                    </Link>
                  </div>

                  {btn?.isExtendable && <IconFinder name={'Arrow'} />}
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
