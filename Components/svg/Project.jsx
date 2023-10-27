import React from "react";

const Project = ({ active = false }) => {
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
        d='M5 17.5H4C3.46957 17.5 2.96086 17.2893 2.58579 16.9142C2.21071 16.5391 2 16.0304 2 15.5V5.5C2 4.96957 2.21071 4.46086 2.58579 4.08579C2.96086 3.71071 3.46957 3.5 4 3.5H20C20.5304 3.5 21.0391 3.71071 21.4142 4.08579C21.7893 4.46086 22 4.96957 22 5.5V15.5C22 16.0304 21.7893 16.5391 21.4142 16.9142C21.0391 17.2893 20.5304 17.5 20 17.5H19M12 15.5L17 21.5H7L12 15.5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Project;
