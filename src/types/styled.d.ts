import "styled-components";

type ColorWithOpacity = (color?: string, opacity?: string) => string;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryFont: string,
      defaultHoverFont: string,
      active: string,
      withOpacity: ColorWithOpacity,
    },
    size: {
      borderRadius: string,
    },
    values: {
      defColorHexOpacity: string,
    }
  }
}
