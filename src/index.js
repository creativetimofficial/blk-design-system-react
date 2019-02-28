import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// docs styles
import "views/Documentation/assets-for-demo/docs.scss";
import "views/Documentation/assets-for-demo/react-docs.scss";
// core styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Documentation from "views/Documentation/Documentation.jsx";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/documentation"
        render={props => <Documentation {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
