import React from "react";
import { UserInfoWrap, UserInfoTitle, UserInfoText } from "./UserInfoStringStyle";

interface UserInfoStringProps {
  title: string,
  children: string,
}

const UserInfoString: React.FC<UserInfoStringProps> = ({ title, children }) => {
  return (
    <UserInfoWrap>
      <UserInfoTitle>{title}</UserInfoTitle>
      <UserInfoText>{children}</UserInfoText>
    </UserInfoWrap>
  );
};

export { UserInfoString };
