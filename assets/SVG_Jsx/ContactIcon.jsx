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
    <G clipPath="url(#clip0_505_2844)">
      <Path
        d="M0.25 4.75C0.25 13.034 6.966 19.75 15.25 19.75H17.5C18.0967 19.75 18.669 19.5129 19.091 19.091C19.5129 18.669 19.75 18.0967 19.75 17.5V16.128C19.75 15.612 19.399 15.162 18.898 15.037L14.475 13.931C14.035 13.821 13.573 13.986 13.302 14.348L12.332 15.641C12.05 16.017 11.563 16.183 11.122 16.021C9.48488 15.4191 7.99815 14.4686 6.76478 13.2352C5.53141 12.0018 4.58087 10.5151 3.979 8.878C3.817 8.437 3.983 7.95 4.359 7.668L5.652 6.698C6.015 6.427 6.179 5.964 6.069 5.525L4.963 1.102C4.90214 0.858695 4.76172 0.642703 4.56405 0.488337C4.36638 0.333971 4.1228 0.250083 3.872 0.25H2.5C1.90326 0.25 1.33097 0.487053 0.90901 0.90901C0.487053 1.33097 0.25 1.90326 0.25 2.5V4.75Z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_505_2844">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
