import React from "react";

const Payment = ({ active = false }) => {
  let color = !active ? "#101828" : "white";

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 7.5H23M3 1.5H21C22.1046 1.5 23 2.39543 23 3.5V15.5C23 16.6046 22.1046 17.5 21 17.5H3C1.89543 17.5 1 16.6046 1 15.5V3.5C1 2.39543 1.89543 1.5 3 1.5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Payment;
