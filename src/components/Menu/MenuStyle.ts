import styled from "styled-components";
import { modalBoxShadow } from "../../styles/CommonStyles";

export const MenuContainer = styled.ul`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  ${modalBoxShadow};
`;

export const MenuItemWrapper = styled.li`
  list-style: none;
`;
