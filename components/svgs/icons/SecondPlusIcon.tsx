import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const SecondPlusIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 17.379}
      className={className}
      height={size || 17.379}
      viewBox="0 0 17.379 17.379"
    >
      <g id="add-circle-outline" transform="translate(0.5 0.5)">
        <path
          id="Path_131"
          data-name="Path 131"
          d="M20.879,12.689a8.189,8.189,0,1,0-8.189,8.189A8.192,8.192,0,0,0,20.879,12.689Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          id="Path_132"
          data-name="Path 132"
          d="M18,12.375V19.2"
          transform="translate(-9.811 -7.598)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Path_133"
          data-name="Path 133"
          d="M19.2,18H12.375"
          transform="translate(-7.598 -9.811)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};

export default SecondPlusIcon;
