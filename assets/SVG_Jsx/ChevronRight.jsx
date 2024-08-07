import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={15}
    height={17}
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_506_3257)">
      <Path
        d="M5.55103 11.31L8.16872 8.25L5.55103 5.19L6.35691 4.25L9.7862 8.25L6.35691 12.25L5.55103 11.31Z"
        fill="#222222"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_506_3257">
        <Rect
          width={16}
          height={13.7172}
          fill="white"
          transform="translate(0.641357 16.25) rotate(-90)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
