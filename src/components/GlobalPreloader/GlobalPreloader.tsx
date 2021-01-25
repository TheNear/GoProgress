import React from "react";
import { PreloaderImg, PreloaderWrapper } from "./GlobalPreloaderStyle";

// TODO: переделать прелоадер, плохой UX
const GlobalPreloader: React.FC = () => {
  return (
    <PreloaderWrapper>
      <PreloaderImg />
    </PreloaderWrapper>
  );
};

export { GlobalPreloader };
