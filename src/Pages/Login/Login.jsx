import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Lottie from "lottie-react-web";
import login from "../../../public/login.json"
import SectionTitle from "../../Components/SectionTitle";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/Fa';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                Swal.fire({
                    title: 'User LogIn Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
    };
    return (
        <>
            <Helmet>
                <title> Akibuki Art | Login</title>
            </Helmet>
            <SectionTitle heading="Login" subHeading="Page" />
            <div className="grid md:grid-cols-2">
                <Lottie
                    options={{
                        animationData: login,
                        loop: true,
                        autoplay: true,
                    }}
                    width={450}
                    height={450}
                />
                <div className="  mx-auto border p-8 my-4 rounded-lg shadow-2xl bg-sky-50">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="input input-bordered w-full " defaultValue="email" {...register("email", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="input input-bordered w-full mb-4"
                                    placeholder="Enter your password"{...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/ })}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="absolute right-4 top-4 cursor-pointer"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>


                        <input className="btn btn-outline w-full btn-warning" type="submit" value="Login" />
                    </form>
                    <p className="py-6"> You have no account please <Link className="text-orange-500" to='/register'>Register</Link></p>
                    <SocialLogin />
                </div>
            </div>

        </>
    );
};

export default Login;