import React from "react";
import { Menu } from "./components/Menu/Menu";
import { AppContainer, MainContent, SideMenu } from "./styles/AppStyle";

const App: React.FC = () => {
  return (
    <AppContainer>
      <SideMenu>
        <Menu />
      </SideMenu>
      <MainContent>sadfsdaf</MainContent>
    </AppContainer>
  );
};

export { App };
