import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';





ReactDOM.createRoot(document.getElementById('root')).render(
<div className=''>
<React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  <Toaster></Toaster>
  </AuthProvider>
  </React.StrictMode>,
</div>
)
