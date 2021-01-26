import { Menu } from "antd";
import styled from "styled-components/macro";
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

export const MenuItem = styled(Menu.Item)`
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const MenuItemText = styled.span`
  /* @media ${device.mobileL} {
    display: none;
  } */
`;

export const QuitButton = styled(MenuItem)`
  && {
    text-align: center;
    margin-top: auto;
  }
`;
