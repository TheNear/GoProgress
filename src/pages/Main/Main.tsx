import React from "react";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { MainContainer, Content, Sider } from "./MainStyle";

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Sider>
        <SideMenu />
      </Sider>
      <Content> content</Content>
    </MainContainer>
  );
};

export { Main };
