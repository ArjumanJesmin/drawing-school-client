import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

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
                navigate(from,{replace:true});
            })
        console.log(data)
    };
    return (
        <>
            <Helmet>
                <title> Akibuki Art  | Login</title>
            </Helmet>
            <div className="w-1/3 gap-4 mx-auto border p-14 m-8 rounded-lg shadow-xl border-orange-400">
                <h2 className="text-3xl font-semibold text-center pb-8 ">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="input input-bordered w-full mb-4 " defaultValue="email" {...register("email", { required: true })} />

                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" className="input input-bordered w-full mb-4 " {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/ })} />
                    </div>
                    <div>
                        <label htmlFor="text">Conform Password:</label>
                        <input type="text" className="input input-bordered w-full  mb-4"  {...register("confirm password", { required: true })} />
                    </div>
                    <br />
                    <input className="btn btn-outline w-full btn-warning" type="submit" value="Login" />
                </form>
                <p className="py-6"> You have no account please <Link className="text-orange-500" to='/register'>Register</Link></p>
            </div>
        </>
    );
};

export default Login;