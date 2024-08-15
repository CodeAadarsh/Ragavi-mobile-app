import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={15}
    height={14}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.44983 11.1491L4.32696 12.7426C3.95929 12.9302 3.5355 12.6167 3.60733 12.2102L4.19983 8.85733L1.70384 6.49592C1.39958 6.20807 1.5629 5.6961 1.97764 5.63761L5.44122 5.14913L7.00414 2.07547C7.18948 1.71098 7.71018 1.71098 7.89552 2.07547L9.45844 5.14913L12.922 5.63761C13.3368 5.6961 13.5001 6.20807 13.1958 6.49592L10.6998 8.85733L11.2923 12.2102C11.3642 12.6167 10.9404 12.9302 10.5727 12.7426L7.44983 11.1491Z"
      fill="#FFBA49"
    />
  </Svg>
);
export default SVGComponent;
