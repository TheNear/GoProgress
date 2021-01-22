import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { MainContainer, MainContent, SideMenu } from "./MainStyle";

const Main: React.FC = () => {
  // TODO: Почистить

  return (
    <MainContainer>
      <SideMenu>
        <Menu />
      </SideMenu>
      <MainContent>sadfsdaf</MainContent>
    </MainContainer>
  );
};

export { Main };
