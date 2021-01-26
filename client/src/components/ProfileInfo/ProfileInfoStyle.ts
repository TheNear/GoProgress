import styled from "styled-components/macro";
import { Avatar } from "antd";
import { modalBoxStyle } from "../../styles/CommonStyles";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  /* flex-wrap: wrap; */
  background-color: white;
  margin: 1rem 0;
  ${modalBoxStyle}
`;

export const UserAvatar = styled(Avatar)`
  min-width: 60px;
  min-height: 60px;
  margin-right: 1rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserInfoPersonal = styled.div`
  display: flex;
  flex-direction: column;
`;
