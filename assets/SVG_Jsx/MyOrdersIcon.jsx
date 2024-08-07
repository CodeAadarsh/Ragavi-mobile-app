import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_506_3260)">
      <Path
        d="M16.875 6.14587L16.3542 15.0059C16.3261 15.4834 16.1166 15.9322 15.7685 16.2603C15.4204 16.5884 14.96 16.7711 14.4817 16.7709H5.51833C5.03997 16.7711 4.57962 16.5884 4.23152 16.2603C3.88342 15.9322 3.6739 15.4834 3.64583 15.0059L3.125 6.14587M8.33333 9.27087H11.6667M2.8125 6.14587H17.1875C17.705 6.14587 18.125 5.72587 18.125 5.20837V3.95837C18.125 3.44087 17.705 3.02087 17.1875 3.02087H2.8125C2.295 3.02087 1.875 3.44087 1.875 3.95837V5.20837C1.875 5.72587 2.295 6.14587 2.8125 6.14587Z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_506_3260">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
