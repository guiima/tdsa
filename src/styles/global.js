import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fef;
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
