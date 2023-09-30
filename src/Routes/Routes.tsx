import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../Pages";
import { Home } from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
