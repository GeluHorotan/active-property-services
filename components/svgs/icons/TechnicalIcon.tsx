import { IIcon } from '@/types/IIcon';
import { FC } from 'react';

const TechnicalIcon: FC<IIcon> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 22}
      height={size || 23.953}
      viewBox="0 0 22 23.953"
      className={className || 'fill-[#fff]'}
    >
      <g id="Layer_2" data-name="Layer 2" transform="translate(0.07 0.001)">
        <g id="Layer_1" data-name="Layer 1" transform="translate(-0.07 -0.001)">
          <path
            id="Path_221"
            data-name="Path 221"
            d="M7.894,7.947H18.9a3.013,3.013,0,0,1,3.024,2.941,1.985,1.985,0,0,1-1.081,1.928.521.521,0,0,0-.315.547c.013.562.011,1.123,0,1.685-.012.606-.261.85-.858.852H15.322c-.607,0-.858-.239-.869-.843-.012-.638,0-1.275,0-1.94H8.872c-.013.133-.037.266-.037.4q0,2.9-.007,5.8a.45.45,0,0,0,.374.523,1.958,1.958,0,0,1,1.477,1.838,13.745,13.745,0,0,1,.018,1.5.7.7,0,0,1-.794.77q-4.587.006-9.174,0a.691.691,0,0,1-.785-.729,13.419,13.419,0,0,1,.022-1.591A1.929,1.929,0,0,1,1.4,19.856c.347-.11.414-.268.414-.589Q1.8,12.833,1.812,6.4A4.416,4.416,0,0,1,5.475,1.822c1.061-.242,2.125-.468,3.189-.7Q11.222.584,13.777.047A2.076,2.076,0,1,1,14.7,4.1c-1.787.414-3.582.8-5.37,1.2A1.626,1.626,0,0,0,7.9,7.088C7.894,7.352,7.894,7.616,7.894,7.947Zm-.468,11.8V12.717c0-.822.2-1.025,1.014-1.025H19.626c.71,0,.989-.343.861-1.043a1.644,1.644,0,0,0-1.752-1.3H3.255V19.742H7.425ZM6.489,7.932V7.149a3.044,3.044,0,0,1,2.621-3.24c1.727-.385,3.426-.759,5.138-1.148.517-.118.734-.432.635-.858a.677.677,0,0,0-.873-.479Q9.859,2.309,5.717,3.2A3,3,0,0,0,3.494,4.947a7.538,7.538,0,0,0-.27,2.984ZM9.3,22.53c0-.254.013-.457,0-.655a.691.691,0,0,0-.749-.725q-3.227-.011-6.454,0a.678.678,0,0,0-.739.679c-.022.226,0,.455,0,.7Zm9.806-9.4H15.882v1.338H19.1Z"
            transform="translate(0.07 0.001)"
          />
          <path
            id="Path_222"
            data-name="Path 222"
            d="M170.171,187.881a2.072,2.072,0,0,1-1.295,1.852,1.979,1.979,0,0,1-2.211-.537,1.943,1.943,0,0,1-.294-2.212c.367-.666.78-1.311,1.2-1.94a.648.648,0,0,1,1.1-.066c.48.7.914,1.442,1.332,2.185A2.5,2.5,0,0,1,170.171,187.881Zm-2.018-1.13a3.368,3.368,0,0,0-.485.811.906.906,0,0,0,.134.735.758.758,0,0,0,.695.021c.3-.156.305-.485.146-.777C168.51,187.3,168.35,187.068,168.153,186.751Z"
            transform="translate(-150.589 -167.408)"
          />
        </g>
      </g>
    </svg>
  );
};

export default TechnicalIcon;
