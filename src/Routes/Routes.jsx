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
import DashboardLayout from "../Layout/DashboardLayout";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import PaymentHistery from "../Pages/Dashboard/Student/Payment/PaymentHistery";
import Instructors from "../Pages/Dashboard/InstructorDashboard/Instructors";

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
        path: '/instructors',
        element: <Instructors />
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
        element: <PrivateRoute><Class /></PrivateRoute>
      },
    ]
  },
  {
    path:'dashboard',
    element:  
     <DashboardLayout><PrivateRoute><Dashboard/></PrivateRoute></DashboardLayout>,
    children:[
      {
        path: 'manageClass',
        element: <ManageClass/>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'addAClass',
        element: <AddAClass/>
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
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path: 'paymentHistery',
        element: <PaymentHistery/>
      },
    ]
  },
  {
    path: '/*',
        element: <Error />
  }
]);
export default router