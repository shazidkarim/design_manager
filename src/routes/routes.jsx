import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import PricingPage from "../pages/PricingPage/PricingPage";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
        },
      ]
    },
    {
      path:"/pricing",
      element: <PricingPage></PricingPage>,
  },
  ]);