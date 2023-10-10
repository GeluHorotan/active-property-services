import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const DownloadIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="cloud-download"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 19.957}
      height={size || 20.004}
      className={className}
      viewBox="0 0 19.957 20.004"
    >
      <path
        id="Path_92"
        data-name="Path 92"
        d="M17.644,16.564h-.358v-1.43h.358A3.221,3.221,0,1,0,17.9,8.7h-.615l-.072-.586a5.006,5.006,0,0,0-9.926,0L7.275,8.7H6.66a3.221,3.221,0,1,0,.257,6.436h.358v1.43H6.917a4.649,4.649,0,0,1-.929-9.2,6.436,6.436,0,0,1,12.586,0,4.649,4.649,0,0,1-.929,9.2Z"
        transform="translate(-2.302 -2.281)"
        className={className}
      />
      <path
        id="Path_93"
        data-name="Path 93"
        d="M16.666,24.453v-8.7h-1.43v8.7l-1.852-1.845-1.008,1.008,3.576,3.576,3.576-3.576-1.008-1.008Z"
        transform="translate(-5.972 -7.188)"
        className={className}
      />
    </svg>
  );
};

export default DownloadIcon;
