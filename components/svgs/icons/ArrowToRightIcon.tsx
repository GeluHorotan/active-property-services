import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const ArrowToRightIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 7.411}
      height={size || 12.961}
      className={className || 'fill-[#fff]'}
      viewBox="0 0 7.411 12.961"
    >
      <path
        id="ios-arrow-down"
        d="M12.671,16.423l4.9-4.9a.923.923,0,0,1,1.308,0,.934.934,0,0,1,0,1.312l-5.554,5.557a.924.924,0,0,1-1.277.027l-5.591-5.58a.926.926,0,0,1,1.308-1.312l4.9,4.9Z"
        transform="translate(-11.246 19.149) rotate(-90)"
      />
    </svg>
  );
};

export default ArrowToRightIcon;
