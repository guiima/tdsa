import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import erros from "./styles/themes/erros";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import MessageModal from "./components/MessageModal";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={erros}>
      <BrowserRouter>
        <Routes />
        <MessageModal />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export default App;
