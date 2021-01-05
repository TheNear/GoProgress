import styled from "styled-components";
import bg from "../../assets/img/auth-bg.jpg";
import { ReactComponent as LogoImg } from "../../assets/img/GOPROGRESS1.svg";

export const AuthLogo = styled(LogoImg)`
  width: 100%;
  height: 100%;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(${bg}) center / cover;
  color: white;
`;

export const AuthContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthTitleLogo = styled.h1`
  text-transform: uppercase;
  font-size: 6rem;
  text-shadow: 2px 2px 5px #0000009c;
`;
