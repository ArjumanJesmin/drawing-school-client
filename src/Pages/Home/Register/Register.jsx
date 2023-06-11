import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                                navigate('/')
                            })
                    })

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
                        <input type="password" className="input input-bordered w-full mb-4 " {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/ })} />
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>

                    <div>
                    <label className="label  mb-4">
                            <span className="label-text">Gander</span>
                        </label>
                        <select className="input input-bordered w-full  mb-4" {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <br />
                    <input className="btn btn-outline w-full btn-warning" type="submit" value="Register" />
                </form>
                <p className="py-6">You have all ready register please <Link className="text-orange-500" to='/login'>Login</Link></p>
                <SocialLogin/>
            </div>
        </>

    );
};

export default Register;