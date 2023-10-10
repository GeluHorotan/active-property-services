import { IIcon } from '@.types/IIcon';
import { FC } from 'react';

const LongArrowIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="arrow-down"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 10.459}
      height={size || 13.433}
      className={className}
      viewBox="0 0 10.459 13.433"
    >
      <path
        id="Path_88"
        data-name="Path 88"
        d="M10.343,27.131a.747.747,0,0,0,1.058,0l3.952-3.954,3.953,3.954a.748.748,0,0,0,1.058-1.058l-4.482-4.482a.747.747,0,0,0-1.058,0l-4.482,4.482a.747.747,0,0,0,0,1.058Z"
        transform="translate(-10.123 -21.373)"
        fill="#4c5870"
        fillRule="evenodd"
      />
      <path
        id="Path_89"
        data-name="Path 89"
        d="M17.622,17.563a.747.747,0,0,0,.747-.747V6.372a.747.747,0,1,0-1.494,0V16.817A.747.747,0,0,0,17.622,17.563Z"
        transform="translate(-12.392 -4.13)"
        fill="#4c5870"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default LongArrowIcon;
