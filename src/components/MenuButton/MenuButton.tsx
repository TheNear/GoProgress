import React from "react";
import { SvgIconType } from "../../styles/types";
import { MenuButtonLink, MenuButtonText } from "./MenuButtonStyle";

interface MenuButtonProps {
  Icon?: SvgIconType;
  href: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ Icon, children, href }) => {
  return (
    <MenuButtonLink activeClassName="active" to={href}>
      {Icon && <Icon />}
      <MenuButtonText>{children}</MenuButtonText>
    </MenuButtonLink>
  );
};

export { MenuButton };
