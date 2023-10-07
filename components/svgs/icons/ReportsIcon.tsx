import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const ReportsIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 22}
      height={size || 21.98}
      viewBox="0 0 22 21.98"
      className={className || 'fill-[#fff]'}
    >
      <g id="Layer_2" data-name="Layer 2" transform="translate(0.001 0)">
        <g id="Layer_1" data-name="Layer 1" transform="translate(-0.001 0)">
          <path
            id="Path_206"
            data-name="Path 206"
            d="M10.98,21.979H6.652a6.574,6.574,0,0,1-6.53-5.373A6.35,6.35,0,0,1,0,15.351V6.628A6.54,6.54,0,0,1,4.923.234,6.838,6.838,0,0,1,6.618,0h8.743a6.555,6.555,0,0,1,6.55,5.71,14.893,14.893,0,0,1,.068,2.037.713.713,0,0,1-.742.684.733.733,0,0,1-.723-.723c0-.581,0-1.162-.049-1.739a5.094,5.094,0,0,0-4.113-4.4,6.047,6.047,0,0,0-1.065-.107H6.7a5.1,5.1,0,0,0-5.158,4.3,4.884,4.884,0,0,0-.078.884q0,4.347,0,8.68a5.114,5.114,0,0,0,4.328,5.129,6.046,6.046,0,0,0,.889.064H15.3a5.109,5.109,0,0,0,5.153-4.328,5.373,5.373,0,0,0,.063-.889V11.4A.723.723,0,0,1,21,10.682a.674.674,0,0,1,.786.2.977.977,0,0,1,.2.488c0,1.431.034,2.867,0,4.3a6.569,6.569,0,0,1-5.539,6.223,7.663,7.663,0,0,1-1.162.088Z"
            transform="translate(0.001 0)"
          />
          <path
            id="Path_207"
            data-name="Path 207"
            d="M22.463,16.59V21.1A.733.733,0,0,1,21,21.133V12.067a.733.733,0,0,1,.977-.752.747.747,0,0,1,.488.742V16.59Z"
            transform="translate(-10.74 -5.766)"
          />
          <path
            id="Path_208"
            data-name="Path 208"
            d="M12,20.637v-3.2a.733.733,0,0,1,1.465,0V23.89a.747.747,0,0,1-.41.713.694.694,0,0,1-.757-.068.752.752,0,0,1-.3-.669Z"
            transform="translate(-6.135 -8.543)"
          />
          <path
            id="Path_209"
            data-name="Path 209"
            d="M31.465,25.15v1.739a.733.733,0,1,1-1.465,0V23.343a.733.733,0,0,1,1.465,0Z"
            transform="translate(-15.347 -11.566)"
          />
        </g>
      </g>
    </svg>
  );
};

export default ReportsIcon;
