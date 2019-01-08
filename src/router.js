import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

import App from "./containers/App";

const Routes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
    </ConnectedRouter>
  );
};

export default Routes;
