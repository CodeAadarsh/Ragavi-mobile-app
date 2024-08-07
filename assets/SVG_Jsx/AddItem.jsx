import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={70}
    height={35}
    viewBox="0 0 40 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_510_3338)">
      <Path
        d="M17.6829 11.7227H13.1946V9.63672H17.6829V5.24219H19.886V9.63672H24.3977V11.7227H19.886V16.1172H17.6829V11.7227Z"
        fill="#222222"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_510_3338">
        <Rect width={39.2512} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
