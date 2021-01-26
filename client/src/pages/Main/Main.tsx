import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { SmallPreloader } from "../../components/SmallPreloader/SmallPreloader";
import { ROUTES } from "../../types/enums";
import {
  MainContainer, Content, Sider,
} from "./MainStyle";

const Profile = React.lazy(() => import("./../Profile/Profile"));

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Sider>
        <SideMenu />
      </Sider>
      <Content>
        <Suspense fallback={<SmallPreloader />}>
          <Switch>
            <Route path={ROUTES.profile} component={Profile} />
          </Switch>
        </Suspense>
      </Content>
    </MainContainer>
  );
};

export { Main };
