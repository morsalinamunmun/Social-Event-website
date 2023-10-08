import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile/Profile";
//import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      //errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details/:id',
          element: <CardDetails></CardDetails>,
          loader: ()=> fetch('../category-data.json')
        },
        {
          path: '/profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
 
export default router;  
