import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token

const AddAClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, className } = data;
                    const newItem = { className, name, price: parseFloat(price), category, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/studentClass', newItem)
                        .then(data => {
                            console.log('after processing new menu item', data.data)

                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })


    };

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
                            <span className="label-text font-semibold">class name*</span>
                        </label>
                        <input type="" placeholder="class name"
                            {...register("className", { required: true, maxLength: 120 })}
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
                                <span className="label-text">Available seats*</span>
                            </label>

                            <input type="text" placeholder="Available seats"
                                {...register("category", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
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