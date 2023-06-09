import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  const isAdmin = true


  return (
    <>
     <Helmet>
        <title>Akibuki | Dashboard </title>
      </Helmet>
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
          {
            isAdmin ? <>

              <li><NavLink to="/dashboard/manageClass"> Manage Class</NavLink></li>
              <li><NavLink to="/dashboard/allUsers"> All Users</NavLink></li>
              <li><NavLink to="/dashboard/addAClass"> Add A Class</NavLink></li>
              <li><NavLink to="/dashboard/myClass"> My Class</NavLink></li>

            </> : <>

              <li><NavLink to="/dashboard/myEnrollClass"> My Enroll Class</NavLink></li>
              <li><NavLink to="/dashboard/mySelectedClass">My Selected Class</NavLink></li>
            </>
          }

          <div className="divider"></div>
                    <li><NavLink to="/"> Home</NavLink> </li>
                    <li><NavLink to="/class">Class</NavLink></li>
        </ul>

      </div>
    </div>
    </>
    
  );
};

export default Dashboard;