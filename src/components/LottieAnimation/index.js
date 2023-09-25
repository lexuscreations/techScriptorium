"use client";

import "@dotlottie/react-player/dist/index.css";
import { DotLottiePlayer } from "@dotlottie/react-player";

const LottieAnimation = ({ src }) => (
  <DotLottiePlayer src={src} autoplay loop></DotLottiePlayer>
);

export default LottieAnimation;
