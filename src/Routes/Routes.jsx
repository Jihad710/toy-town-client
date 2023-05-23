import {createBrowserRouter} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";

import PrivetRoute from "./PrivateRoutes";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import MyToys from "../Pages/MyToy/MyToys";
import About from "../Pages/About/About";




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
          path:'/mytoy',
          element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path: "/alltoy/:id",
          element:<PrivetRoute> <ToyDetails></ToyDetails></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/alltoy/${params.id}`)
        },
        {
          path: "/updatetoys/:id",
          element:<PrivetRoute><UpdateToys/></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/updateToys/${params.id}`)
        }
        
      ]
      
    },
  ]);

  export default router;