import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Landing from "./Views/Landing";
import Manifesto from "./Views/Manifesto";
import JoinUs from './Views/JoinUs'

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/manifesto" component={Manifesto} />
          <Route exact path="/join-us" component={JoinUs} />
          <Redirect from="/" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Main;
