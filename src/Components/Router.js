import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "Routes/Detail";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" component={TV}></Route>
    <Route path="/tv/popular" render={() => <h1>popular TV</h1>}></Route>
    <Route path="/detail" component={Detail}></Route>
    <Route path="/search" component={Search}></Route>
  </Router>
);
