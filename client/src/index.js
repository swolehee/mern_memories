import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import reducers from "./reducers";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Memories from "./routes/Memories";
import Sports from "./routes/Sports";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "memories",
        element: <Memories />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
    ],
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);
