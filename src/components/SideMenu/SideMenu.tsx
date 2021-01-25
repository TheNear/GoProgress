import React from "react";
// import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { menuListData } from "./SideMenuListData";
import { device } from "../../styles/breakpoints";
import {
  MenuItem, MenuItemText, MenuStyled, QuitButton,
} from "./SideMenuStyle";
import { useLogin } from "../../hooks/useLogin";

const SideMenu: React.FC = () => {
  const { pathname } = useLocation();
  const isNotDesktop = useMediaQuery({ query: device.laptop });
  const { logout } = useLogin();

  return (
    <MenuStyled
      mode={isNotDesktop ? "horizontal" : "vertical"}
      selectedKeys={[pathname]}
      theme="dark"
      triggerSubMenuAction="click"
    >
      {menuListData.map((item) => (
        <MenuItem key={item.href} icon={<item.Icon />}>
          <NavLink to={item.href}>
            <MenuItemText>{item.text}</MenuItemText>
          </NavLink>
        </MenuItem>
      ))}
      <QuitButton onClick={logout}>Выход</QuitButton>
    </MenuStyled>
  );
};

export { SideMenu };
