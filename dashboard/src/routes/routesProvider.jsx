import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path : "/productos" ,
      element :  < Product />
    }],
    
  
  },
  
]);
export const ProviderRouter = () => <RouterProvider router={router} />;
