import {
  BarChartSquare,
  UserRectangle,
  Group,
  CalendarEdit,
  Chart,
} from "@styled-icons/boxicons-solid";
import { SvgIconType } from "../../types/types";

export interface MenuListItem {
  id: string;
  icon?: SvgIconType;
  href: string;
  text: string;
  color?: string;
}

export const menuList: MenuListItem[] = [
  {
    id: "myprofile1",
    href: "/myprofile",
    text: "Мой профиль",
    icon: UserRectangle,
  },
  {
    id: "myteam1",
    href: "/myteam",
    text: "Моя команда",
    icon: Group,
  },
  {
    id: "dolist1",
    href: "/dolist",
    text: "Запланированные задачи",
    icon: CalendarEdit,
  },
  {
    id: "mychart1",
    href: "/mychart",
    text: "Рейтинг в команде",
    icon: BarChartSquare,
  },
  {
    id: "worldchart1",
    href: "/worldchart",
    text: "Мировой рейтинг",
    icon: Chart,
  },
];
