import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0px 0px 7px 1px black;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  overflow-x: hidden;
`;

export const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  padding: 3rem;
  background-color: white;
  box-shadow: 0 0 3px 0px #000000c7;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  overflow-x: hidden;
`;
