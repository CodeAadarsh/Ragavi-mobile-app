import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 14.01V7H9V14.01H6L10 18L14 14.01H11ZM4 0L0 3.99H3V11H5V3.99H8L4 0Z"
      fill="#222222"
    />
  </Svg>
);
export default SVGComponent;
