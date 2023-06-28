import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import Root from "./routes/Root";
import Child from "./routes/Child";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Child />,
    children: [
      {
        path: "/", // chemin/formationexemple
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsDesktopProvider>
      <RouterProvider router={router} />
    </IsDesktopProvider>
  </React.StrictMode>
);
