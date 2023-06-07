import { Link } from "react-router-dom";
import Container from "../Container/Container";
import {  AiOutlineCrown } from 'react-icons/ai';


const Navbar = () => {
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-300">
          <Container>
            <div className="navbar">
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case text-2xl my-6">
                        <p className="flex">
                        <span className="text-cyan-800 pr-2">Crown </span>
                       <div className="text-center text-4xl text-amber-500"> <AiOutlineCrown/></div>
                       <span className="text-slate-800 ps-2">Art</span>
                        </p>
                       
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className=" text-xl text-slate-800" to='/'>Home</Link></li>
                        <li><Link className=" text-xl text-slate-800" to='/instructors'>Instructors</Link></li>
                        <li><Link className=" text-xl text-slate-800" to='/class'>Classes</Link></li>
                        <li><Link className="text-xl text-slate-800" to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>
                </div>
            </div>
        </Container>
      </div>
    );
};

export default Navbar;
