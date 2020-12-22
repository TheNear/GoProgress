import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";

interface MenuButtonLinkProps extends NavLinkProps {
  color?: string;
}

export const MenuButtonLink = styled(NavLink)<MenuButtonLinkProps>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  justify-content: flex-start;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &.active {
    color: ${({ theme, color }) => color || theme.colors.defaultHoverFont};
    background-color: ${({ theme, color }) => theme.colors.withOpacity(color)};
    box-shadow: 0 0 2px 2px ${({ theme, color }) => theme.colors.withOpacity(color)};
  }

  &:hover {
    color: ${({ theme, color }) => color || theme.colors.defaultHoverFont};
    background-color: ${({ theme, color }) => theme.colors.withOpacity(color)};
  }

  &:focus {
    outline: none;
    color: ${({ theme, color }) => color || theme.colors.defaultHoverFont};
    background-color: ${({ theme, color }) => theme.colors.withOpacity(color)};
  }

  & > svg {
    min-width: 2.5rem;
    min-height: 2.5rem;
    margin-right: 1rem;
  }

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.tablet} {
    & > svg {
      margin-right: 0;
    }
  }
`;

// TODO: Добавить аддаптив
export const MenuButtonText = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;
