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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";

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
    path:'dashboard',
    element:  
     <PrivateRoute><Dashboard/></PrivateRoute>,
    // <Dashboard/>,
    children:[
      {
        path: 'manageClass',
        element: <ManageClass/>
      },
      {
        path: 'allUsers',
        element: <AllUsers/>
      },
      {
        path: 'addAClass',
        element: <AdminRoute><AddAClass/></AdminRoute>
      },
      {
        path: 'myClass',
        element: <MyClass/>
      },
      {
        path: 'myEnrollClass',
        element: <MyEnrollClass/>
      },
      {
        path: 'mySelectedClass',
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