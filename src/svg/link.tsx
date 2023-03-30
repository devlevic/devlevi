import React, { SVGProps } from "react";

type LinkSvgProps = SVGProps<SVGSVGElement>;
function LinkSvg(props: LinkSvgProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="1.5 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 19.168C8.619 19.168 7.09 17.778 7.09 16.068L7.09 12.068L5 12.068L5 16.068C5 18.828 7.464 21.068 10.5 21.068C13.536 21.068 16 18.828 16 16.068L16 12.068L13.91 12.068L13.91 16.068C13.91 17.778 12.381 19.168 10.5 19.168ZM11.6 15.068L11.6 7.06799L9.4 7.06799L9.4 15.068L11.6 15.068ZM5 6.06799L5 10.068L7.09 10.068L7.09 6.06799C7.09 4.35799 8.619 2.96799 10.5 2.96799C12.381 2.96799 13.91 4.35799 13.91 6.06799L13.91 10.068L16 10.068L16 6.06799C16 3.30799 13.536 1.06799 10.5 1.06799C7.464 1.06799 5 3.30799 5 6.06799Z"
        fill={props.fill || "white"}
      />
    </svg>
  );
}

export default LinkSvg;
