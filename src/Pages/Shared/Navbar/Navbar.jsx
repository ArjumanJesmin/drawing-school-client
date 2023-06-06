import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case text-xl">Crown Art</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Class</Link></li>
                        <li><Link>Dashboard</Link></li>
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
