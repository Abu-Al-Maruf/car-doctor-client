import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
]);

export default router;
