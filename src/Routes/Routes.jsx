import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/Apps/AppDetails";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        index: true,  
        element: <Home/>
      },
      {
        path: '/apps',  
        element: <Apps/>
      },
      {
        path: '/app/:id',
        element: <AppDetails/>
      },
      {
        path: '/installedApps',
        element: <Installation/>
      }
    ]
  },
]);

export default router;