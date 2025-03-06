import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Component/Login.jsx';
import Admin from './Component/Dashboard/Admin.jsx';
import DashboardHome from './Component/Dashboard/DashboardHome.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';
import PrivateRoute from './Authprovider/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:'/admin',
    element:  <Admin></Admin>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
