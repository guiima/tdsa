import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import Teste from "../components/Teste";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/teste" component={Teste} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
