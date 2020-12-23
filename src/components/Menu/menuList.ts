import {
  FcTodoList,
  FcConferenceCall,
  FcSettings,
  FcLineChart,
  FcAreaChart,
} from "react-icons/fc";
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
    icon: FcSettings,
  },
  {
    id: "myteam1",
    href: "/myteam",
    text: "Моя команда",
    icon: FcConferenceCall,
  },
  {
    id: "dolist1",
    href: "/dolist",
    text: "Запланированные задачи",
    icon: FcTodoList,
  },
  {
    id: "mychart1",
    href: "/mychart",
    text: "Рейтинг в команде",
    icon: FcLineChart,
  },
  {
    id: "worldchart1",
    href: "/worldchart",
    text: "Мировой рейтинг",
    icon: FcAreaChart,
  },
];
