import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { AiOutlineCrown } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err.message))
    }

    return (


        <div className="bg-gradient-to-r from-cyan-700 to-blue-500">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link className="btn btn-ghost normal-case text-2xl my-6">
                            <p className="flex">
                                <span className="text-white pr-2">Crown </span>
                                <div className="text-center text-4xl text-amber-500"> <AiOutlineCrown /></div>
                                <span className="text-white ps-2">Art</span>
                            </p>

                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link className=" text-xl text-white" to='/'>Home</Link></li>
                            <li><Link className=" text-xl text-white" to='/instructors'>Instructors</Link></li>
                            <li><Link className=" text-xl text-white" to='/class'>Classes</Link></li>
                            <li><Link className="text-xl text-white" to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.uid ?
                                <>
                                    <button onClick={handleLogout} className="btn btn-outline btn-warning">LogOut</button>
                                </>
                                :
                                <>
                                    <Link to='/login'><button className="btn btn-outline btn-warning">Login</button>
                                    </Link>
                                </>
                        }
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default Navbar;
