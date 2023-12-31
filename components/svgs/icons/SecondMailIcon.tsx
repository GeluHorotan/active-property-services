import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const SecondMailIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 22}
      height={size || 18.859}
      className={className}
      viewBox="0 0 22 18.859"
    >
      <path
        id="Path_193"
        data-name="Path 193"
        d="M11.009-.013h7.019A3.9,3.9,0,0,1,21.92,3.151,3.739,3.739,0,0,1,22,3.908Q22,9.382,22,14.856a3.916,3.916,0,0,1-3.975,3.987q-7.021.006-14.04,0A3.92,3.92,0,0,1,0,14.86V3.915A3.915,3.915,0,0,1,3.915-.008C6.28-.017,8.645-.013,11.009-.013Zm9.408,5.407c-.1.065-.171.105-.238.15l-6.821,4.537a3.947,3.947,0,0,1-4.719,0l-6.8-4.526c-.078-.052-.158-.1-.267-.167v9.465A2.352,2.352,0,0,0,3.99,17.276q7,0,14.015,0a2.619,2.619,0,0,0,.655-.077,2.325,2.325,0,0,0,1.766-2.272c.008-3.125,0-6.25,0-9.375A1.336,1.336,0,0,0,20.417,5.395ZM11.031,1.558H3.961A2.369,2.369,0,0,0,1.67,3.234a.325.325,0,0,0,.154.437Q5.708,6.244,9.581,8.834a2.35,2.35,0,0,0,2.815.011l7.83-5.187a.3.3,0,0,0,.137-.4,2.357,2.357,0,0,0-2.27-1.7Z"
        transform="translate(0 0.014)"
      />
    </svg>
  );
};

export default SecondMailIcon;
