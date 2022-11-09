import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Reviews from "../../pages/reviews/Reviews";
import Services from "../../pages/all services/Services";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import AddServices from "../../pages/add-services/AddServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-services",
        element: <AddServices></AddServices>,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () => fetch("http://localhost:5000/services"),
      },
    ],
  },
]);
