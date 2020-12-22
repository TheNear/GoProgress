import styled from "styled-components/macro";
import { device } from "./breakpoints";
import { modalBoxStyle } from "./CommonStyles";

export const AppContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(auto, 240px) 1fr;
  gap: 2rem;
  padding: 0.7rem;
  min-height: 100vh;
  min-width: 100%;

  @media ${device.laptop} {
    grid-auto-flow: row;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    font-size: 1.4rem;
  }

  @media ${device.mobileL} {
    grid-template-rows: 1fr auto;
  }
`;

export const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${modalBoxStyle};

  @media ${device.mobileL} {
    order: 2;
  }
`;

export const MainContent = styled.main`

`;
