import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width="20px"
    height="20px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#b12221" />
    </G>
  </Svg>
);
export default SVGComponent;
