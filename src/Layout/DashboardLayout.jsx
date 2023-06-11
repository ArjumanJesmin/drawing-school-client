/* eslint-disable react/prop-types */

import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;