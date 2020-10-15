import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard.js";

export const Main = () => (
  <Provider store={store}>
    <ConnectedDashboard />
  </Provider>
);
