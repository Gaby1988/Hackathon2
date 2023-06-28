import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import Root from "./routes/Root";
import Home from "./pages/home/Home";
import PageRecap from "./pages/PageRecap";

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
      {
        path: "/phone-recap",
        element: <PageRecap />,
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
