import styled from "styled-components/macro";
import { ReactComponent as LoaderSVG } from "../../assets/img/loader.svg";

export const PreloaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;
  height: 100%;
  box-shadow: 0px 0px 7px 1px black;
  background-image: ${({ theme }) => theme.colors.bgGradient};
  overflow-x: hidden;
`;

export const PreloaderImg = styled(LoaderSVG)`

`;
