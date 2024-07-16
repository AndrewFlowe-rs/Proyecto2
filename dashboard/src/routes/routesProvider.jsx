import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Product from "../pages/Product";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import DetailProduct from "../pages/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/productos",
        element: <Product />,
      },
      {
        path: "/productos/:id",
        element: <DetailProduct />,
      },
      {
        path: "/usuarios",
        element: <Users />,
      },
     
    ],
  },
]);
export const ProviderRouter = () => <RouterProvider router={router} />;
