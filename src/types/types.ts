import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

export type ReactSvg = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>;

export type SvgIconType = ReactSvg | StyledIcon;
