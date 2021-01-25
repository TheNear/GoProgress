import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Alert } from "antd";
import { ProfileWrapper, TabsList } from "./ProfileStyle";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { ROUTES } from "../../types/enums";

const Profile: React.FC = () => {
  const history = useHistory();

  return (
    <ProfileWrapper>
      <TabsList
        onChange={(key) => {
          history.push(key);
        }}
        defaultActiveKey={history.location.pathname}
      >
        <TabsList.TabPane tab="Данные" key={ROUTES.profile}>
          <Route path={ROUTES.profile}>sdafsad</Route>
        </TabsList.TabPane>
        <TabsList.TabPane tab="Настройки" key={ROUTES.profileSetting}>
          <Route path={ROUTES.profileSetting}>
            <Alert
              type="info"
              showIcon
              message="Что это за раздел?"
              description="Это раздел ваших персональных настроек. Вы можете поменять данные и поменять приватность вашего профиля"
              closable
            />
            <ProfileInfo />
          </Route>
        </TabsList.TabPane>
      </TabsList>
    </ProfileWrapper>
  );
};

export default Profile;
