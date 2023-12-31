/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { AiOutlineCrown } from 'react-icons/Ai';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <Helmet>
                <title>Akibuki | Navbar </title>
            </Helmet>
            <div className="bg-[#00425A]">
                <Container>
                    <div className="navbar">
                        <div className="navbar-start">
                            <Link className="btn btn-ghost normal-case text-xl md:text-2xl">
                                <p className="flex">
                                    <span className="text-white pr-2">Crown </span>
                                    <div className="text-center md:text-4xl text-amber-500"> <AiOutlineCrown /></div>
                                    <span className="text-white ps-2">Art</span>
                                </p>

                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link className=" text-xl text-white" to='/'>Home</Link></li>
                                <li><Link className=" text-xl text-white" to='/instructors'>Instructors</Link></li>
                                <li><Link className=" text-xl text-white" to='/class'>Classes</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            {
                                user?.uid ?
                                    <>
                                        <Link className="text-xl text-white md:my-4" to='/dashboard'>Dashboard</Link>

                                        <div className="w-10 mx-4 ">
                                            <img className="rounded-full" src={user.photoURL} />
                                        </div>

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
        </>


    );
};

export default Navbar;
