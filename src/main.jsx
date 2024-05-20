import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./Components/App";

import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
//------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },

  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);
//-----------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
