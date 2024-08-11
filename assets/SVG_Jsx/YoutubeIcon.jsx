import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_506_4956)">
      <Path
        d="M9.75 8.9999V14.9999C9.75 15.5999 10.425 15.9749 10.95 15.6749L15.45 12.6749C15.9 12.3749 15.9 11.6999 15.45 11.3999L10.95 8.3999C10.425 8.0249 9.75 8.3999 9.75 8.9999Z"
        stroke="black"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.075 19.1249C13.8 19.6499 10.2 19.6499 2.925 19.1249C2.1 19.0499 1.275 18.2999 1.2 17.4749C0.6 13.1249 0.6 10.9499 1.2 6.5999C1.35 5.7749 2.1 4.9499 2.925 4.9499C10.2 4.4249 13.8 4.4249 21.075 4.9499C21.9 5.0249 22.725 5.7749 22.8 6.5999C23.4 10.9499 23.4 13.1249 22.8 17.4749C22.725 18.2999 21.9 19.0499 21.075 19.1249Z"
        stroke="black"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_506_4956">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
