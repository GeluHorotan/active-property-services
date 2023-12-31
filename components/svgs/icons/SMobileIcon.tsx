import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const SMobileIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 10.431}
      height={size || 15}
      className={className}
      viewBox="0 0 10.431 15"
    >
      <path
        id="Path_96"
        data-name="Path 96"
        d="M6.207,3.955c-.025.217-.038.431-.076.644a1.519,1.519,0,0,1-.978,1.216c-.262.105-.527.212-.78.33a.751.751,0,0,0-.5.888,4.442,4.442,0,0,0,1.1,2.345.711.711,0,0,0,1,.185c.2-.09.41-.176.616-.268a1.526,1.526,0,0,1,1.743.255,5.352,5.352,0,0,1,.865.944,12.619,12.619,0,0,1,.942,1.545,3.194,3.194,0,0,1,.31,1.054,1.044,1.044,0,0,1-.549,1.089,5.4,5.4,0,0,1-4.273.6A5.661,5.661,0,0,1,2.8,12.6,14.278,14.278,0,0,1,.055,5.694,6.035,6.035,0,0,1,.3,3.236,4.379,4.379,0,0,1,2.351.777,9.76,9.76,0,0,1,3.487.184,1.353,1.353,0,0,1,5.473.9,9.069,9.069,0,0,1,6.207,3.955Zm.8,10.013.022.081c.664-.182,1.334-.345,1.99-.554.458-.146.553-.327.316-.745-.427-.75-.918-1.463-1.391-2.188a1.061,1.061,0,0,0-.258-.234.622.622,0,0,0-.731-.092c-.241.126-.5.225-.749.328a1.545,1.545,0,0,1-1.7-.244A5.042,5.042,0,0,1,2.9,7.376,1.8,1.8,0,0,1,4.123,5.147c.2-.081.393-.172.594-.245a.566.566,0,0,0,.41-.517,3.343,3.343,0,0,0-.007-.9,20.568,20.568,0,0,0-.527-2.061C4.453.991,4.256.932,3.85,1.133a13.347,13.347,0,0,0-1.293.732,3.164,3.164,0,0,0-1.4,2.107A5.9,5.9,0,0,0,1.118,6.1,14.282,14.282,0,0,0,3.1,11.275,6.63,6.63,0,0,0,4.863,13.25,3.248,3.248,0,0,0,7.007,13.968Z"
        transform="translate(-0.021 0)"
        fill="#6b5cd1"
      />
    </svg>
  );
};

export default SMobileIcon;
