import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  ol, ul,
  button,
  p {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: #FB6B6B;
    font-family: 'Recursive', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  button {
    background-color: inherit;
    border: none;
  }
`;