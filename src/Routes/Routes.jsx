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
          element:<AddToy></AddToy>
        },
        {
          path:'/alltoy',
          element:<AllToy></AllToy>
        },
        {
          path:'/mytoy',
          element:<MyToy></MyToy>
        }
      ]
      
    },
  ]);

  export default router;