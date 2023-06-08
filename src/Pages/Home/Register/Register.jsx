import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)

    const onSubmit = data =>{
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoUrl)
            
        })
    };

    return (
        <>
            <Helmet>
            <title> Akibuki Art  || Sign Up</title>
            </Helmet>

            <div className="w-1/2 gap-4 mx-auto border p-14 m-8 rounded-lg shadow-xl border-orange-400">
                <h2 className="text-3xl font-semibold text-center pb-8 ">Register</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="input input-bordered w-full mb-4 " {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="input input-bordered w-full mb-4 " defaultValue="email" {...register("email", { required: true })} />

                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" className="input input-bordered w-full mb-4 " {...register("password", { required: true, minLength: 6, pattern: /[A-Za-z]+$/i })} />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div>
                        <label htmlFor="text">Conform Password:</label>
                        <input type="password" className="input input-bordered w-full  mb-4"  {...register("confirm password", { required: true })} />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>

                    <select className="input input-bordered w-full  mb-4" {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <br />
                    <input className="btn btn-outline w-full btn-warning" type="submit" value="Register" />
                </form>
                <p className="py-6">You have all ready register please <Link className="text-orange-500" to='/login'>Login</Link></p>

            </div>
        </>

    );
};

export default Register;