import React from "react";
import { SvgIconType } from "../../types/types";
import { MenuButtonLink, MenuButtonText } from "./MenuButtonStyle";

interface MenuButtonProps {
  Icon?: SvgIconType;
  href: string;
  color?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  Icon, children, href, color,
}) => {
  return (
    <MenuButtonLink color={color} activeClassName="active" to={href}>
      {Icon && <Icon />}
      <MenuButtonText>{children}</MenuButtonText>
    </MenuButtonLink>
  );
};

export { MenuButton };
