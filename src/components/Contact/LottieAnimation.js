"use client";

import "@dotlottie/react-player/dist/index.css";
import { DotLottiePlayer } from "@dotlottie/react-player";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/animation_lmuogof3.lottie"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
