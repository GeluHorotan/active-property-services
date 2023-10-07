import { IIcon } from '@types/IIcon';
import { FC } from 'react';

const PlusIcons: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 16.8}
      height={size || 16.8}
      className={className}
      viewBox="0 0 16.8 16.8"
    >
      <g id="add-circle-outline" transform="translate(0.4 0.4)">
        <path
          id="Path_120"
          data-name="Path 120"
          d="M20.5,12.5a8,8,0,1,0-8,8A8,8,0,0,0,20.5,12.5Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke="#575757"
          stroke-miterlimit="10"
          stroke-width="0.8"
        />
        <path
          id="Path_121"
          data-name="Path 121"
          d="M18,12.375v6.667"
          transform="translate(-10 -7.708)"
          fill="none"
          stroke="#575757"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_122"
          data-name="Path 122"
          d="M19.042,18H12.375"
          transform="translate(-7.708 -10)"
          fill="none"
          stroke="#575757"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
      </g>
    </svg>
  );
};

export default PlusIcons;
