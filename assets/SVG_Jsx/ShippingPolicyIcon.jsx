import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.875 2.5H3.03C3.455 2.5 3.82583 2.78583 3.93583 3.19583L4.255 4.39333M4.255 4.39333C8.8972 4.26324 13.5349 4.77929 18.035 5.92667C17.3483 7.97167 16.5325 9.95833 15.5983 11.875H6.25M4.255 4.39333L6.25 11.875M6.25 11.875C5.58696 11.875 4.95107 12.1384 4.48223 12.6072C4.01339 13.0761 3.75 13.712 3.75 14.375H16.875M5 16.875C5 17.0408 4.93415 17.1997 4.81694 17.3169C4.69973 17.4342 4.54076 17.5 4.375 17.5C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875C3.75 16.7092 3.81585 16.5503 3.93306 16.4331C4.05027 16.3158 4.20924 16.25 4.375 16.25C4.54076 16.25 4.69973 16.3158 4.81694 16.4331C4.93415 16.5503 5 16.7092 5 16.875ZM15.625 16.875C15.625 17.0408 15.5592 17.1997 15.4419 17.3169C15.3247 17.4342 15.1658 17.5 15 17.5C14.8342 17.5 14.6753 17.4342 14.5581 17.3169C14.4408 17.1997 14.375 17.0408 14.375 16.875C14.375 16.7092 14.4408 16.5503 14.5581 16.4331C14.6753 16.3158 14.8342 16.25 15 16.25C15.1658 16.25 15.3247 16.3158 15.4419 16.4331C15.5592 16.5503 15.625 16.7092 15.625 16.875Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
