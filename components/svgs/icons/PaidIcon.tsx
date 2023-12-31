import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const PaidIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 15}
      height={size || 15.792}
      className={className}
      viewBox="0 0 15 15.792"
    >
      <path
        id="Path_233"
        data-name="Path 233"
        d="M3.485.759c.112-.64.215-.787.531-.776s.419.176.469.765h6.03c.117-.632.216-.781.527-.765.492.03.443.427.474.756.322.036.63.048.928.107A3.2,3.2,0,0,1,15,3.9q.021,4.373,0,8.747a3.193,3.193,0,0,1-3.118,3.114q-4.373.028-8.747,0A3.188,3.188,0,0,1,.021,12.612Q0,8.273.021,3.932A3.211,3.211,0,0,1,3.169.778C3.276.778,3.383.765,3.485.759ZM.954,6.106v6.233a2.333,2.333,0,0,0,2.482,2.487h8.15a2.334,2.334,0,0,0,2.483-2.487V6.106ZM14.046,5.13c.185-2.217-.969-3.736-2.523-3.367-.076.583-.164.738-.464.741-.536.007-.486-.425-.53-.767H4.493c-.072.6-.167.762-.464.767-.54.009-.487-.425-.53-.782a2.349,2.349,0,0,0-2.014.845A3.466,3.466,0,0,0,.969,5.132Z"
        transform="translate(-0.01 0.018)"
        fill="#141414"
      />
      <path
        id="Path_234"
        data-name="Path 234"
        d="M90.267,112.67c-.1.654-.186.8-.489.806s-.411-.136-.52-.806c-.137-.02-.28-.028-.416-.062a1,1,0,0,1-.633-1.4.563.563,0,0,1,.447-.246c.156.025.3.209.418.353.056.072.028.211.042.36h1.3v-1.134h-1.2c-.744,0-1.06-.319-1.066-1.07v-.928c.009-.688.3-.994,1-1.052a1.214,1.214,0,0,0,.12-.021c.092-.651.183-.8.489-.806s.41.133.519.806a4.06,4.06,0,0,1,.416.06,1,1,0,0,1,.631,1.4.561.561,0,0,1-.447.248c-.157-.025-.3-.209-.418-.354-.057-.072-.028-.211-.043-.361H89.117V109.6h1.3a.88.88,0,0,1,.967.933c.013.353.007.706,0,1.06a.928.928,0,0,1-1,1.054A.858.858,0,0,0,90.267,112.67Z"
        transform="translate(-82.262 -99.596)"
        fill="#141414"
      />
    </svg>
  );
};

export default PaidIcon;
