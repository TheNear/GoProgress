import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Sider = styled.aside`
  width: 200px;
  height: 100vh;
  position: fixed;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  
  @media ${device.laptop} {
    width: 100vw;
    height: 47px;
  }

  @media ${device.tablet} {
    bottom: 0;
  }
`;

export const Content = styled.main`
  display: flex;
  padding-left: calc(200px + 1rem);
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  min-height: 100vh;
  background-color: #F0F2F5;

  @media ${device.laptop} {
    padding: calc(47px + 1rem) 1rem 1rem 1rem;
  }

  @media ${device.tablet} {
    padding: 1rem 1rem calc(47px + 1rem) 1rem;
  }
`;
