import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";

export const MenuContainer = styled.ul`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};

  @media ${device.laptop} {
    grid-auto-flow: column;
    // TODO: Исправить
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const MenuItemWrapper = styled.li`
  list-style: none;
`;
