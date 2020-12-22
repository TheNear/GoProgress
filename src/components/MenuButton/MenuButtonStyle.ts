import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const MenuButtonLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  justify-content: flex-start;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &.active {
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.colors.hover};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.hover};
  }

  & > svg {
    min-width: 2.5rem;
    min-height: 2.5rem;
    margin-right: 1rem;
  }
`;

// TODO: Добавить аддаптив
export const MenuButtonText = styled.span`
  /* display: none; */
`;
