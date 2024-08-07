import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={18}
    height={16}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 3.03501C7.62634 1.80281 5.84533 1.12246 4 1.12501C3.12333 1.12501 2.28167 1.27501 1.5 1.55167V13.4267C2.30302 13.1434 3.14847 12.9991 4 13C5.92083 13 7.67333 13.7225 9 14.91M9 3.03501C10.3736 1.80274 12.1547 1.12238 14 1.12501C14.8767 1.12501 15.7183 1.27501 16.5 1.55167V13.4267C15.697 13.1434 14.8515 12.9991 14 13C12.1547 12.9975 10.3737 13.6778 9 14.91M9 3.03501V14.91"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
