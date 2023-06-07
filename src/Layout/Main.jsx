import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Helmet } from 'react-helmet-async';

const Main = () => {
    <Helmet>
        <title>Akibuki | Menu </title>
      </Helmet>
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;