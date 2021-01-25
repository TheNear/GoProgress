import { UserOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import React from "react";
import { GetUserDataQuery } from "../../graphql/userQueries";
import { SmallPreloader } from "../SmallPreloader/SmallPreloader";
import { UserInfoString } from "../UserInfoString/UserInfoString";
import {
  Container, UserInfoContainer, UserAvatar, UserInfoPersonal,
} from "./ProfileInfoStyle";

const ProfileInfo: React.FC = () => {
  const { data, loading } = useQuery(GetUserDataQuery);

  if (loading || !data) {
    return <SmallPreloader />;
  }

  return (
    <Container>
      <UserAvatar size={60} shape="square" icon={<UserOutlined />} />
      <UserInfoContainer>
        <UserInfoPersonal>
          <UserInfoString title="Username:">
            {data.getUserData.name}
          </UserInfoString>
          <UserInfoString title="Email:">
            {data.getUserData.email}
          </UserInfoString>
        </UserInfoPersonal>
      </UserInfoContainer>
    </Container>
  );
};

export { ProfileInfo };
