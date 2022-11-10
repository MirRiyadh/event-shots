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
import ServicesDeatils from "../../pages/all services/services details/ServicesDeatils";
import Blog from "../../pages/blog/Blog";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import UpdateReview from "../../pages/reviews/UpdateReview";

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
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
        loader: async () =>
          fetch("https://react-assignment-eleven-server.vercel.app/services"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/services/:id",
        element: <ServicesDeatils></ServicesDeatils>,
        loader: async ({ params }) =>
          fetch(
            `https://react-assignment-eleven-server.vercel.app/${params.id}`
          ),
      },
      {
        path: "/update-review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://react-assignment-eleven-server.vercel.app/${params.id}`
          ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: async () =>
          fetch("https://react-assignment-eleven-server.vercel.app/services"),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
