import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

/*

I put this in a router because I've found
 it's just good practice to put in a switch
 so that you can test multiple versions of pages etc,
 gives you options
*/

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}
