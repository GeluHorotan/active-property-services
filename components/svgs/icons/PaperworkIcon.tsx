import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const PaperworkIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 13.714}
      height={size || 16}
      className={className}
      viewBox="0 0 13.714 16"
    >
      <g id="file-earmark-arrow-down" transform="translate(-4.5 -2.25)">
        <path
          id="Path_103"
          data-name="Path 103"
          d="M6.786,2.25H12.5V3.393H6.786A1.143,1.143,0,0,0,5.643,4.536V15.964a1.143,1.143,0,0,0,1.143,1.143h9.143a1.143,1.143,0,0,0,1.143-1.143v-8h1.143v8a2.286,2.286,0,0,1-2.286,2.286H6.786A2.286,2.286,0,0,1,4.5,15.964V4.536A2.286,2.286,0,0,1,6.786,2.25Z"
          fill="#0c4ab9"
        />
        <path
          id="Path_104"
          data-name="Path 104"
          d="M20.25,6.25v-4l5.714,5.714h-4A1.714,1.714,0,0,1,20.25,6.25Z"
          transform="translate(-7.75)"
          fill="#0c4ab9"
        />
        <path
          id="Path_105"
          data-name="Path 105"
          d="M12.541,20.416a.571.571,0,0,1,.809,0L15.231,22.3l1.881-1.882a.572.572,0,0,1,.809.809l-2.286,2.286a.571.571,0,0,1-.809,0l-2.286-2.286a.571.571,0,0,1,0-.809Z"
          transform="translate(-3.874 -8.856)"
          fill="#0c4ab9"
          fillRule="evenodd"
        />
        <path
          id="Path_106"
          data-name="Path 106"
          d="M17.446,13.5a.571.571,0,0,1,.571.571v4.571a.571.571,0,1,1-1.143,0V14.071A.571.571,0,0,1,17.446,13.5Z"
          transform="translate(-6.089 -5.536)"
          fill="#0c4ab9"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default PaperworkIcon;
