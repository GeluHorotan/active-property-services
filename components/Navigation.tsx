import { FC } from 'react';
import navigationData from '@/locale/ro/navigationData.json';
import Logo from '@/components/svgs/Logo';

const Navigation: FC = () => {
  const { main_buttons, secondary_buttons } = navigationData;
  return (
    <nav className="h-screen w-[15%] px-9 pb-9 pt-6 flex items-center justify-between bg-blue-300 rounded-[20px] flex-col  text-[#fff] text-base ">
      <div className="flex flex-col items-start gap-16 w-full">
        <div className="w-full flex">
          <Logo />
        </div>
        <div className="flex flex-col items-start gap-9 ">
          {main_buttons?.map((btn, i) => {
            return (
              <p key={i} className="font-medium">
                {btn?.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-9 w-full">
        {secondary_buttons?.map((btn, i) => {
          return (
            <p key={i} className="font-medium">
              {btn?.title}
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
