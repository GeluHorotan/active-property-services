import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const RealEstateIcon: FC<IIcon> = ({ className, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 26}
      height={size || 25.915}
      viewBox="0 0 26 25.915"
      className={className || 'fill-[#fff]'}
    >
      <g id="Layer_2" data-name="Layer 2" transform="translate(0 -0.003)">
        <g id="Layer_1" data-name="Layer 1" transform="translate(0 0.003)">
          <path
            id="Path_248"
            data-name="Path 248"
            d="M0,19.759V10.571H1.5s.847.012,1.61,0,1.443-.048,1.443-.048l1.527-.01H7.606V4.533l-1.14.559L5.754,3.761c.659-.354,1.28-.692,1.905-1.026C9.318,1.852,10.972.962,12.639.1a.81.81,0,0,1,.64-.046c2.28,1.19,4.547,2.405,6.82,3.616a1.135,1.135,0,0,1,.151.126L19.543,5.1,18.4,4.514v6.005H19.9l1.539,0h1.539l1.5.005H26v9.231c-1.053,0-2.086-.017-3.116.01a1.324,1.324,0,0,0-.791.244,5.229,5.229,0,0,1-4.357,1.292,4.948,4.948,0,0,0-.662,0c-.592-.023-1.1-.017-1.446.661a1.661,1.661,0,0,1-1.56.794.638.638,0,0,0-.671.379,2.074,2.074,0,0,1-1.636,1.068.635.635,0,0,0-.421.305,2.158,2.158,0,0,1-3.766.517c-1.323-1.629-2.6-3.306-3.912-4.945a.931.931,0,0,0-.624-.305C2.044,19.741,1.044,19.759,0,19.759ZM7.023,15.65l4.5-3.535H1.544v6.107c.741,0,1.451.019,2.16-.007a.876.876,0,0,1,.8.407c1.376,1.785,2.772,3.555,4.164,5.328.351.447.705.527,1.034.256s.32-.574-.013-1.018c-.389-.524-.781-1.046-1.181-1.583L9.733,20.7c.424.555.83,1.094,1.245,1.629.3.379.65.455.957.221s.337-.575.044-.98c-.333-.461-.676-.916-1.028-1.392l1.213-.91c.4.529.787,1.04,1.175,1.549.343.45.691.552,1.018.305s.338-.593,0-1.064c-.324-.446-.652-.889-.992-1.351l1.221-.9c.462.611.873,1.172,1.3,1.716a.593.593,0,0,0,.9.12.574.574,0,0,0,.12-.86c-.674-.952-1.37-1.888-2.073-2.85-.66.494-1.28.961-1.9,1.425a3.683,3.683,0,0,1-5.9-1.7Zm17.459,2.572V12.115a2.651,2.651,0,0,0-.266-.027c-3.29,0-6.579-.007-9.873.009a1.152,1.152,0,0,0-.628.259c-1.09.834-2.166,1.686-3.245,2.533-.483.38-.965.763-1.456,1.153a2.085,2.085,0,0,0,2.8.2,15.6,15.6,0,0,0,1.5-1.136,2.757,2.757,0,0,1,2.168-.725c1.2.065,2.4.016,3.613.016v1.558H16.761c.464.636.859,1.208,1.287,1.755a2.5,2.5,0,0,1,.459,2,2.1,2.1,0,0,0,1.819-.383c.293-.252.665-.407.964-.657a2.067,2.067,0,0,1,1.552-.465C23.377,18.255,23.92,18.222,24.482,18.222Zm-7.634-7.694c0-2.239.007-4.427-.014-6.616,0-.146-.19-.342-.341-.425-1.036-.574-2.077-1.139-3.136-1.67a.877.877,0,0,0-.686-.005c-1.056.537-2.086,1.121-3.141,1.661a.608.608,0,0,0-.369.633c.012,1.9.006,3.8.006,5.7v.712h1.544V6.008h4.624v4.519Zm-4.58-.007h1.473V7.514H12.27Z"
            transform="translate(0 -0.003)"
          />
        </g>
      </g>
    </svg>
  );
};

export default RealEstateIcon;
