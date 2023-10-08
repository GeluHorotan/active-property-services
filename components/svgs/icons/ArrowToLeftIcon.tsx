import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const ArrowToLeftIcon: FC<IIcon> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 6.37}
      height={size || 11}
      viewBox="0 0 6.37 11"
    >
      <path
        id="arrow-down"
        d="M0,5.034a.323.323,0,0,0,.1.237.323.323,0,0,0,.237.1.323.323,0,0,0,.237-.1L5.035.809,9.427,5.2A.335.335,0,1,0,9.9,4.728L5.271.1A.334.334,0,0,0,4.8.1L.1,4.787a.231.231,0,0,0-.035.044.338.338,0,0,0-.025.049l-.02.049L.005,4.98Z"
        transform="translate(0.5 10.5) rotate(-90)"
        fill="#3851a8"
        stroke="#3851a8"
        strokeWidth="1"
      />
    </svg>
  );
};

export default ArrowToLeftIcon;
