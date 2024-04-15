import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/ResidentialEstates.json"),
         },
         {
            path: "/details/:estateId",
            element: (
               <PrivateRoute>
                  <EstateDetails></EstateDetails>
               </PrivateRoute>
            ),
            loader: () => fetch("/ResidentialEstates.json"),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/updateProfile",
            element: (
               <PrivateRoute>
                  <UpdateProfile></UpdateProfile>
               </PrivateRoute>
            ),
         },
      ],
   },
]);
