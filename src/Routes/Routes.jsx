import {createBrowserRouter} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import MyToy from "../Pages/MyToy/MyToy";
import PrivetRoute from "./PrivateRoutes";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";




const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addtoy',
          element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>
        },
        {
          path: "/allToys/:id",
          element:<PrivetRoute> <ToyDetails></ToyDetails></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path: "/updateToys/:id",
          element:<PrivetRoute><UpdateToys/></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/updateToys/${params.id}`)
        },
        {
          path:'/mytoy',
          element:<PrivetRoute><MyToy></MyToy></PrivetRoute>
        }
      ]
      
    },
  ]);

  export default router;