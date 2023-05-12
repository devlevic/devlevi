import React, { SVGProps } from "react";

type LanSvgProps = SVGProps<SVGSVGElement>;
function LanSvg(props: LanSvgProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 96 960 960" {...props}>
        <path
          d="M120 976V706h120V546h210V446H330V176h300v270H510v100h210v160h120v270H540V706h120V606H300v100h120v270H120Zm270-590h180V236H390v150ZM180 916h180V766H180v150Zm420 0h180V766H600v150ZM480 386ZM360 766Zm240 0Z" />
      </svg>
    </>
  );
}

export default LanSvg;
