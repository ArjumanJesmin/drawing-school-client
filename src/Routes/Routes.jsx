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
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";
import MyEnrollClass from "../Pages/Dashboard/Student/MyEnrollClass";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";

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
    element:<Dashboard/>,
    children:[
      {
        path: '/dashboard/manageClass',
        element: <ManageClass/>
      },
      {
        path: '/dashboard/addAClass',
        element: <AddAClass/>
      },
      {
        path: '/dashboard/myClass',
        element: <MyClass/>
      },
      {
        path: '/dashboard/myEnrollClass',
        element: <MyEnrollClass/>
      },
      {
        path: '/dashboard/mySelectedClass',
        element: <MySelectedClass/>
      },
    ]
  },
  {
    path: '/*',
        element: <Error />
  }
]);
export default router