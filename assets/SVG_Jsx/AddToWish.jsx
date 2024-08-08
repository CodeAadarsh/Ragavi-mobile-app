import * as React from "react";
import Svg, { G, Ellipse, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={38}
    height={41}
    viewBox="0 0 38 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_719_453)">
      <Ellipse cx={19} cy={16.242} rx={15} ry={16.1864} fill="white" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4823 9.76749C20.3444 9.76749 19.2523 10.3391 18.5395 11.2423C17.8267 10.3391 16.7346 9.76749 15.5967 9.76749C13.5826 9.76749 12 11.4752 12 13.6487C12 16.3161 14.2234 18.4896 17.5913 21.7922L18.5395 22.7166L19.4877 21.7851C22.8556 18.4896 25.079 16.3161 25.079 13.6487C25.079 11.4752 23.4965 9.76749 21.4823 9.76749ZM18.6049 20.7407L18.5395 20.8113L18.4741 20.7407C15.3613 17.6992 13.3079 15.6881 13.3079 13.6487C13.3079 12.2373 14.2888 11.1788 15.5967 11.1788C16.6038 11.1788 17.5847 11.8774 17.9313 12.8442H19.1542C19.4943 11.8774 20.4752 11.1788 21.4823 11.1788C22.7902 11.1788 23.7711 12.2373 23.7711 13.6487C23.7711 15.6881 21.7177 17.6992 18.6049 20.7407Z"
      fill="#9B9B9B"
    />
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
