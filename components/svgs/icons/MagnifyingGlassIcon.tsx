import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const MagnifyingGlassIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 14.563}
      height={size || 14.563}
      className={className}
      viewBox="0 0 14.563 14.563"
    >
      <path
        id="search"
        d="M17.917,17.157,16.2,15.436l-2.358-2.37a5.929,5.929,0,1,0-.781.781l4.091,4.07ZM4.442,9.293a4.851,4.851,0,1,1,4.851,4.851A4.851,4.851,0,0,1,4.442,9.293Z"
        transform="translate(-3.353 -3.353)"
        fill="#141414"
      />
    </svg>
  );
};

export default MagnifyingGlassIcon;
