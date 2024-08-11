import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.01636 8.62505H11.0789C11.659 8.62505 12.2154 8.85552 12.6257 9.26575C13.0359 9.67599 13.2664 10.2324 13.2664 10.8125C13.2664 11.3927 13.0359 11.9491 12.6257 12.3593C12.2154 12.7696 11.659 13 11.0789 13H10.1414M7.01636 8.62505L8.89136 6.75005M7.01636 8.62505L8.89136 10.5M16.3914 4.46422V18.6251L13.2664 17.375L10.1414 18.6251L7.01636 17.375L3.89136 18.6251V4.46422C3.89136 3.54088 4.56302 2.75005 5.48052 2.64338C8.57735 2.28391 11.7054 2.28391 14.8022 2.64338C15.7189 2.75005 16.3914 3.54088 16.3914 4.46422Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
