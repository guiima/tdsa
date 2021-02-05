import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import global from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={global}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export default App;
