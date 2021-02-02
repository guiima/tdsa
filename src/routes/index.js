import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import Teste from "../components/Teste";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/teste" component={Teste} />
    </Switch>
  );
}
