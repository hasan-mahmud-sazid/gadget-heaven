import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/componants/Root/Root";
import ErrorPage from "../src/componants/ErrorPage/ErrorPage";
import Home from "../src/componants/Home/Home";
import Dashboard from "../src/componants/Dashboard/Dashboard";
import Statistics from "../src/componants/Statistics/Statistics";
import ProductDetails from "./componants/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import Compare from "./componants/Compare/Compare";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/compare",
        element: <Compare></Compare>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
