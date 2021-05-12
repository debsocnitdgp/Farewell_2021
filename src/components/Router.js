import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../home-page";
import Profile from "../profile";
import GallerySection from "../ui/gallery-section-profile";
import LandingSectionProfile from "../ui/landing-section-profile";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/i">
          {/* <LandingSectionProfile />
                <GallerySection /> */}
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
