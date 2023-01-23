import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import UserPanelInfo from "./components/Users/UserPanelInfo/UserPanelInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:username",
    element: <UserPanelInfo />,
  },
]);
