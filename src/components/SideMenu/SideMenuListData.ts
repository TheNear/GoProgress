import {
  BarChartOutlined,
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ROUTES } from "../../types/enums";
import { SvgIconType } from "../../types/types";

export interface MenuListItem {
  id: string;
  Icon: SvgIconType;
  href: ROUTES;
  text: string;
  color?: string;
}

export const menuListData: MenuListItem[] = [
  {
    id: "home",
    href: ROUTES.home,
    text: "Домашняя",
    Icon: HomeOutlined,
  },
  {
    id: "myprofile",
    href: ROUTES.profile,
    text: "Профиль",
    Icon: UserOutlined,
  },
  {
    id: "myteam",
    href: ROUTES.team,
    text: "Команда",
    Icon: TeamOutlined,
  },
  {
    id: "dolist",
    href: ROUTES.dolist,
    text: "Задачи",
    Icon: UnorderedListOutlined,
  },
  {
    id: "mychart",
    href: ROUTES.chart,
    text: "Рейтинг",
    Icon: LineChartOutlined,
  },
  {
    id: "worldchart",
    href: ROUTES.worldchart,
    text: "Мировой рейтинг",
    Icon: BarChartOutlined,
  },
];
