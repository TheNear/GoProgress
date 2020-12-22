import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      font: string,
      hover: string,
      active: string,
    },
    size: {
      borderRadius: string,
    }
  }
}
