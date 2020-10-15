import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard.js";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history.js";
import { ConnectedNavigation } from "./Navigation.js";
import { ConnectTaskDetail } from "./TaskDetail.js";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
        <Route
          exact
          path="/task/:id"
          render={({ match }) => <ConnectTaskDetail match={match} />}
        />
      </div>
    </Provider>
  </Router>
);
