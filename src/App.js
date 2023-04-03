import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./tableOfContents/Home";
import routes from "./tableOfContents/routes";
import BCProps from "./app/exercises/props-drilling/button-counter/ButtonCounter";
import BCRedux from "./app/exercises/redux/button-counter/ButtonCounter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: routes.drilling.bc,
      element: <BCProps />,
    },
    {
      path: routes.redux.bc,
      element: <BCRedux />,
    },
  ]);

  return (
    <main id="content-area">
      <RouterProvider router={router} />;
    </main>
  );
};

export default App;
