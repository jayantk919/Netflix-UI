import React from "react";

const CurvedBanner = () => (
  <div className=' bottom-0 absolute w-full h-16 flex items-start justify-center overflow-hidde'>
    {/* Curved blue area */}
    <svg
      viewBox='0 0 600 65'
      className='w-full h-16'
      preserveAspectRatio='none'
    >
      {/* Blue Fill */}
      <div className='relative w-full h-16 flex items-start justify-center overflow-hidden bg-black'>
        {/* Curved blue area */}
        <svg
          viewBox='0 0 600 65'
          className='w-full h-16'
          preserveAspectRatio='none'
        >
          {/* Blue Fill */}
          <path d='M0,65 Q300,-20 600,65 Z' fill='#141414' />
          {/* Red Curve on Top */}
          <path
            d='M0,64 Q300,-20 600,64'
            stroke='#e50914'
            strokeWidth={3}
            fill='none'
          />
        </svg>
      </div>
      );
      {/* Red Curve on Top */}
      <path
        d='M0,64 Q300,-20 600,64'
        stroke='#e50914'
        strokeWidth={6}
        fill='none'
      />
    </svg>
  </div>
);

export default CurvedBanner;
