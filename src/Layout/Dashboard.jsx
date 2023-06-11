import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log({isAdmin});

  return (
    <>
      <Helmet>
        <title>Akibuki | Dashboard </title>
      </Helmet>

      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl">DashBoard</h2>
          {isAdmin ? (
            
            <p>
              Admin Online <span className="text-5xl text-slate-500">.</span>{" "}
            </p>
          ) : isInstructor ? (
            <p>
              Instructor Online{" "}
              <span className="text-5xl text-slate-500">.</span>
            </p>
          ) : (
            <p>
              User Online <span className="text-5xl text-slate-500">.</span>
            </p>
          )}
        </div>
        {/* ------------------------------------- */}

        {/* Side Drawer */}
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
            {isAdmin && (
              <>
              <li>
                  <NavLink to="/dashboard/addAClass">Add A Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClass">Manage Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">Manage Users</NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                
                <li>
                  <NavLink to="/dashboard/myClass">My Class</NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/instructorHome">Instructor Home</NavLink>
                </li>

              </>
            )}
            {!isAdmin && !isInstructor && (
              <>

                <li>
                  <NavLink to="/dashboard/myEnrollClass">My Enroll Class</NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/mySelectedClass">My Selected Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">Payment</NavLink>
                  {/* <button className="btn btn-info">Payment </button> */}
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">Student Home</NavLink>
            </li>
            <li>
              <NavLink to="/class">Class</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
// import useInstructor from "../Hooks/useInstructor";

// const Dashboard = () => {

//   // const isAdmin = true
//   const [isAdmin] = useAdmin()
//   const [isInstructor] = useInstructor()

//   return (
//     <>
//       <Helmet>
//         <title>Akibuki | Dashboard </title>
//       </Helmet>

//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//           {/* Page content here */}
//           <Outlet></Outlet>
//           <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
//         </div>

//         {/* ------------------------------------- */}
//         {/* <div>
//           <h3 className='text-2xl'>DashBoard</h3>

//           {
//             isAdmin ? <p>
//               Admin Online <span className='text-5xl text-green-600'>.</span> </p>
//               :
//               isInstructor ?
//                 <p>Instructor Online <span className='text-5xl text-green-600'>.</span></p>
//                 :
//                 <p>User Online <span className='text-5xl text-green-600'>.</span></p>

//           }

//         </div> */}
//         {/* ------------------------------------- */}

//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
//             {
//               isAdmin ? <>
//                 <li><NavLink to="/dashboard/manageClass"> Manage Class</NavLink></li>
//                 <li><NavLink to="/dashboard/allUsers"> All Users</NavLink></li>
//                 <li><NavLink to="/dashboard/addAClass"> Add A Class</NavLink></li>
//                 <li><NavLink to="/dashboard/myClass"> My Class</NavLink></li>
//               </>
//                 :
//                 isInstructor ?
//                   <>

//                     <li><NavLink to="/dashboard/myEnrollClass"> Instructor Home</NavLink></li>
//                     <li><NavLink to="/dashboard/myEnrollClass"> My Enroll Class</NavLink></li>
//                     <li><NavLink to="/dashboard/mySelectedClass">Submitted Subject</NavLink></li>
//                   </>
//                   :
//                   <>
//                     <li><NavLink to="/dashboard/myEnrollClass"> Payment History</NavLink></li>
//                     <li><NavLink to="/dashboard/mySelectedClass">My Selected Class</NavLink></li>
//                   </>

//             }

//             <div className="divider"></div>
//             <li><NavLink to="/"> Student Home</NavLink> </li>
//             <li><NavLink to="/class">Class</NavLink></li>
//           </ul>

//         </div>
//       </div>

//     </>

//   );
// };

// export default Dashboard;