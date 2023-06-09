import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
const img_hosting_token = import.meta.env.VITE_Image_Upload_token

const AddAClass = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Helmet>
                <title>Akibuki | Add A Class </title>
            </Helmet>

            <div className="w-full px-10 shadow-lg py-2">
                <SectionTitle heading="Add A Class" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class name*</span>
                        </label>
                        <input type="text" placeholder="Class name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>


                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Available seats" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Drawing</option>
                                <option>Painting</option>
                                <option>Digital Art</option>
                                <option>Sculpting</option>
                                <option>Mixed Media</option>
                            </select>
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <input className="btn mt-4 btn-outline  " type="submit" value="Add Class" />
                </form>
            </div>
        </>
    );
};

export default AddAClass;