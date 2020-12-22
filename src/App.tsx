import React from "react";
import { Menu } from "./components/Menu/Menu";
import { AppContainer } from "./styles/AppStyle";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Menu />
    </AppContainer>
  );
};

export { App };
