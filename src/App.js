import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./tableOfContents/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <main id="content-area">
      <RouterProvider router={router} />;
    </main>
  );
};

export default App;
