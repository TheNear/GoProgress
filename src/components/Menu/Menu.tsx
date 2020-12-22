import React from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { menuList } from "./menuList";
import { MenuContainer, MenuItemWrapper } from "./MenuStyle";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      {menuList.map((item) => (
        <MenuItemWrapper key={item.id}>
          <MenuButton color={item.color} Icon={item.icon} href={item.href}>{item.text}</MenuButton>
        </MenuItemWrapper>
      ))}
    </MenuContainer>
  );
};

export { Menu };
