import { css } from "styled-components";

export const modalBoxStyle = css`
  border-radius: ${({ theme }) => theme.size.borderRadius};
  box-shadow: 0px 4px 16px rgb(42 41 51 / 8%), 0px 8px 24px rgb(63 63 79 / 16%);
`;