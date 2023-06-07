import { Link } from "react-router-dom";
import Container from "../Container/Container";
import crown from '../../../assets/art .jpg'

const Navbar = () => {
    return (
        <Container>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case text-2xl my-6">
                        <p className="flex">
                        <span className="text-yellow-500">Crown </span>
                       <img className="w-8 " src={crown} alt="" /> 
                       Art
                        </p>
                       
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/class'>Class</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
