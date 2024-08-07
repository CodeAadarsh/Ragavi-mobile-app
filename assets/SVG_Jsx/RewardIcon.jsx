import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={22}
    height={21}
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.625 10.375V18.625C19.625 19.0228 19.467 19.4044 19.1857 19.6857C18.9044 19.967 18.5228 20.125 18.125 20.125H3.875C3.47718 20.125 3.09564 19.967 2.81434 19.6857C2.53304 19.4044 2.375 19.0228 2.375 18.625V10.375M10.625 4C10.625 3.48083 10.471 2.97331 10.1826 2.54163C9.89417 2.10995 9.4842 1.7735 9.00454 1.57482C8.52489 1.37614 7.99709 1.32415 7.48789 1.42544C6.97869 1.52673 6.51096 1.77673 6.14384 2.14385C5.77673 2.51096 5.52672 2.97869 5.42544 3.48789C5.32415 3.99709 5.37614 4.52489 5.57482 5.00454C5.7735 5.4842 6.10995 5.89417 6.54163 6.18261C6.97331 6.47105 7.48082 6.625 8 6.625H10.625M10.625 4V6.625M10.625 4C10.625 3.48083 10.779 2.97331 11.0674 2.54163C11.3558 2.10995 11.7658 1.7735 12.2455 1.57482C12.7251 1.37614 13.2529 1.32415 13.7621 1.42544C14.2713 1.52673 14.739 1.77673 15.1062 2.14385C15.4733 2.51096 15.7233 2.97869 15.8246 3.48789C15.9258 3.99709 15.8739 4.52489 15.6752 5.00454C15.4765 5.4842 15.1401 5.89417 14.7084 6.18261C14.2767 6.47105 13.7692 6.625 13.25 6.625H10.625M10.625 6.625V20.125M2 10.375H20C20.621 10.375 21.125 9.871 21.125 9.25V7.75C21.125 7.129 20.621 6.625 20 6.625H2C1.379 6.625 0.875 7.129 0.875 7.75V9.25C0.875 9.871 1.379 10.375 2 10.375Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
