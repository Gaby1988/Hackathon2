import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import { IsDesktopProvider } from "./contexts/IsDesktopContext";
import Root from "./routes/Root";
import Login from "../src/pages/home/Login";
import HomePage from "./pages/home/HomePage";
import AddProduct from "./pages/AddProduct";
import PhoneView from "./pages/PhoneView";
import PageRecap from "./pages/PageRecap";
import LegalNotice from "./pages/LegalNotice";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/phoneview",
        element: <PhoneView />,
      },
      {
        path: "/phone-recap",
        element: <PageRecap />,
      },
      {
        path: "/legalNotice",
        element: <LegalNotice />,
      },
      {
        path: "/persons",
        element: <AboutUs />,
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
