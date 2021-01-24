import {
  BarChartOutlined, LineChartOutlined, TeamOutlined, UnorderedListOutlined, UserOutlined,
} from "@ant-design/icons";
import { SvgIconType } from "../../types/types";

export interface MenuListItem {
  id: string;
  Icon: SvgIconType;
  href: string;
  text: string;
  color?: string;
}

export const menuListData: MenuListItem[] = [
  {
    id: "myprofile",
    href: "/myprofile",
    text: "Профиль",
    Icon: UserOutlined,
  },
  {
    id: "myteam",
    href: "/myteam",
    text: "Команда",
    Icon: TeamOutlined,
  },
  {
    id: "dolist",
    href: "/dolist",
    text: "Задачи",
    Icon: UnorderedListOutlined,
  },
  {
    id: "mychart",
    href: "/mychart",
    text: "Рейтинг",
    Icon: LineChartOutlined,
  },
  {
    id: "worldchart",
    href: "/worldchart",
    text: "Мировой рейтинг",
    Icon: BarChartOutlined,
  },
];
