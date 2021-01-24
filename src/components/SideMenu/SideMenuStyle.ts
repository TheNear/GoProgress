import { Menu } from "antd";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MenuStyled = styled(Menu)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media ${device.laptop} {
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

`;

export const QuitButton = styled(Menu.Item)`
  && {
    text-align: center;
    margin-top: auto;
  }
`;
