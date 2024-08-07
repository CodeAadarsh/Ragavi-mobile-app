import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.3301 19C15.7484 19 19.3301 15.4183 19.3301 11C19.3301 6.58172 15.7484 3 11.3301 3C6.9118 3 3.33008 6.58172 3.33008 11C3.33008 15.4183 6.9118 19 11.3301 19Z"
      stroke="#888E9A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.3301 21L16.9801 16.65"
      stroke="#888E9A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
