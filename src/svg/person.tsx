import React, { SVGProps } from "react";

const PersonSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      fill="none"
      viewBox="0 0 14 16"
      {...props}
    >
      <path
        fill="inherit"
        d="M6.95 8.558c-2.358 0-4.278-1.92-4.278-4.279S4.592 0 6.95 0s4.279 1.92 4.279 4.28c0 2.358-1.92 4.278-4.28 4.278zm0-7.442A3.17 3.17 0 003.789 4.28 3.17 3.17 0 006.95 7.442a3.17 3.17 0 003.162-3.163 3.17 3.17 0 00-3.162-3.163zM13.343 16a.562.562 0 01-.558-.558c0-2.568-2.62-4.651-5.834-4.651-3.215 0-5.835 2.083-5.835 4.65A.562.562 0 01.558 16 .562.562 0 010 15.442c0-3.178 3.118-5.768 6.95-5.768 3.833 0 6.951 2.59 6.951 5.768a.562.562 0 01-.558.558z"
      ></path>
    </svg>
  );
};

export default PersonSvg;
