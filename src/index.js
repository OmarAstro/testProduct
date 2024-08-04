import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {
    createHashRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <div>Hello world!</div>,
    }
];

const router = createHashRouter(routes, {
        basename: 'transfers'
    }
);

// ////////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
