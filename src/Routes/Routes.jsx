import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Error from "../Pages/Error/Error";
import Class from "../Pages/Class/Class";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/class',
        element: <Class />
      },
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path: '/*',
        element: <Error />
  }
]);
export default router