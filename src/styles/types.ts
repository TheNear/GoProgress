import React from "react";
import { IconType } from "react-icons/lib";

export type ReactSvg = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>;

export type SvgIconType = IconType | ReactSvg;
