import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../home-page";
import Profile from "../profile";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:i">
          {/* <LandingSectionProfile />
                <GallerySection /> */}
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
