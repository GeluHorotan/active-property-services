import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const MobileIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 11.001}
      height={size || 15}
      className={className}
      viewBox="0 0 11.001 15"
    >
      <path
        id="Path_97"
        data-name="Path 97"
        d="M-.029,7.5V2.529A2.488,2.488,0,0,1,1.984.052,2.569,2.569,0,0,1,2.5,0l5.95,0a2.493,2.493,0,0,1,2.523,2.529q0,4.975,0,9.949A2.49,2.49,0,0,1,8.454,15Q5.471,15,2.488,15a2.494,2.494,0,0,1-2.517-2.52Q-.031,9.987-.029,7.5Zm1,0v4.9A1.5,1.5,0,0,0,2.565,14H8.376A1.5,1.5,0,0,0,9.97,12.4q0-4.9,0-9.808A1.5,1.5,0,0,0,8.376,1H2.566A1.5,1.5,0,0,0,.971,2.6Z"
        transform="translate(0.03 0)"
        fill="#6b5cd1"
      />
      <path
        id="Path_98"
        data-name="Path 98"
        d="M97.5,289h-.969a.5.5,0,1,1,0-1h1.921a.5.5,0,1,1,0,1Z"
        transform="translate(-91.999 -276.002)"
        fill="#6b5cd1"
      />
    </svg>
  );
};

export default MobileIcon;
