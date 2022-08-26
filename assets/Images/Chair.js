import * as React from "react";
function ChairImg(props) {
  return (
    <svg
      width={448}
      height={521}
      viewBox="0 0 448 521"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        fill="url(#prefix__pattern0)"
        fillOpacity={0.9}
        d="M0 0h448v521H0z"
      />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.0004 0 0 .0004 -.314 0)"
          />
        </pattern>
        <image
          id="prefix__image0"
          width={4096}
          height={2926}
        />
      </defs>
    </svg>
  );
}
export default ChairImg;