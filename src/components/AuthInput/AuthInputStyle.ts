import styled from "styled-components/macro";

export const AuthInputWrapper = styled.div`
  position: relative;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    transition: box-shadow 0.3s ease;
  }

  &:focus-within {
    &:after {
      box-shadow: 0 0 3px 2px #3498db;
    }
  }
`;

export const AuthInputLabel = styled.label`
  display: block;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 700;
`;

export const AuthInputStyled = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  box-shadow: 0px 1px 0px 0px #00000033;
  padding: 0.5rem;
  color: white;
  font-family: inherit;
  font-size: 1.6rem;

  &:focus {
    outline: none;
  }
`;
