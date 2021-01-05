import styled from "styled-components/macro";
import bg from "../../assets/img/auth-bg.jpg";
import { ReactComponent as LogoImg } from "../../assets/img/GOPROGRESS1.svg";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #004E5A;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;

export const AuthContainer = styled.div`
  max-width: 40rem;
  width: 40%;
  display: grid;
  gap: 1rem;
`;

export const AuthLogo = styled(LogoImg)`
  width: 100%;
`;
