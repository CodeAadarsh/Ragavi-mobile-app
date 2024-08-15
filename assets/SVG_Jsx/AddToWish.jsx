import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_480_4065)">
      <Circle cx={22} cy={18} r={18} fill="white" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.4823 12C23.3444 12 22.2523 12.5297 21.5395 13.3668C20.8267 12.5297 19.7346 12 18.5967 12C16.5826 12 15 13.5826 15 15.5967C15 18.0687 17.2234 20.0828 20.5913 23.1433L21.5395 24L22.4877 23.1368C25.8556 20.0828 28.079 18.0687 28.079 15.5967C28.079 13.5826 26.4965 12 24.4823 12ZM21.6049 22.1689L21.5395 22.2343L21.4741 22.1689C18.3613 19.3504 16.3079 17.4866 16.3079 15.5967C16.3079 14.2888 17.2888 13.3079 18.5967 13.3079C19.6038 13.3079 20.5847 13.9553 20.9313 14.8512H22.1542C22.4943 13.9553 23.4752 13.3079 24.4823 13.3079C25.7902 13.3079 26.7711 14.2888 26.7711 15.5967C26.7711 17.4866 24.7177 19.3504 21.6049 22.1689Z"
      fill="#9B9B9B"
    />
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
