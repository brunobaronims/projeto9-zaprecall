import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  ol, ul {
    margin: 0;
    padding: 0;
  }

  body {
    background: #FB6B6B;
  }

  ol, ul {
    list-style: none;
  }
`;