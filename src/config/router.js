import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../App";
import About from "../about";

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </BrowserRouter>
);