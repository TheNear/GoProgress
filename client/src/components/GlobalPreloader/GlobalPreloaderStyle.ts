import styled from "styled-components/macro";
import { ReactComponent as LoaderSVG } from "../../assets/img/loader.svg";

export const PreloaderWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;
  height: 100%;
  box-shadow: 0px 0px 7px 1px black;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  overflow-x: hidden;
`;

export const PreloaderImg = styled(LoaderSVG)`

`;
