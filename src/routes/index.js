import React from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
