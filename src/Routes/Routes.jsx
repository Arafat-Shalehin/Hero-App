import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        index: true,  
        element: <Home/>
      }
    ]
  },
]);

export default router;