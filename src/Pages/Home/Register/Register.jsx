import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="w-1/2 gap-4 mx-auto border p-14 m-8 rounded-lg shadow-xl border-orange-400">
            <h2 className="text-3xl font-semibold text-center pb-8 ">Register</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <input className="input input-bordered w-full mb-4 " defaultValue="name" {...register("name", { required: true })} />
            <input className="input input-bordered w-full mb-4 " defaultValue="email" {...register("email", { required: true })} />
            <input className="input input-bordered w-full mb-4 " defaultValue="password" {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} />
            <input className="input input-bordered w-full  mb-4" defaultValue="confirm password" {...register("confirm password", { required: true })} />

            <select className="input input-bordered w-full  mb-4" {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <br/>
            <input className="btn btn-outline w-full btn-warning" type="submit" />
        </form>
        <p className="py-6">You have all ready register please <Link className="text-orange-500" to='/login'>Login</Link></p>
    </div>
    );
};

export default Register;