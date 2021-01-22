import React from "react";
import { PreloaderImg, PreloaderWrapper } from "./GlobalPreloaderStyle";

const GlobalPreloader: React.FC = () => {
  return (
    <PreloaderWrapper>
      <PreloaderImg />
    </PreloaderWrapper>
  );
};

export { GlobalPreloader };
