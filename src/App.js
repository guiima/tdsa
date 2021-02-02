import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import global from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

const App = () => (
  <ThemeProvider theme={global}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
