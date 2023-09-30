/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";


const AllUsers = () => {
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure()


    const { data: users = [], refetch } = useQuery([], async () => {
        const response = await axiosSecure.get('/users');
        return response.data;
    });

    const handleMakeAdmin = (user) => {
        axiosSecure
            .patch(`/users/admin/${user._id}`)
            .then((response) => {
                if (response.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error("Error making admin:", error);
            });
    }

    const handleMakeInstructor = (user) => {
        axiosSecure
            .patch(`/users/instructor/${user._id}`)
            .then((response) => {
                if (response.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error making instructor:", error);
            });
    };

    const handleDelete  = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/users/admin/${user._id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'This user has been deleted.', 'success');
                            navigate('/');
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                    });
            }
        });
    };


    return (
        <>
            <Helmet>
                <title>Akibuki | All users</title>
            </Helmet>
            <SectionTitle heading="All" subHeading="Users" ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-10/12 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td >{user.role}</td>
                                    <td>
                                        <button className="btn text-white bg-orange-500 btn-sm" disabled={user.role === 'Admin'} onClick={() => handleMakeAdmin(user)}>
                                            Admin
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn bg-lime-600 text-white btn-sm" disabled={user.role === 'Instructor'} onClick={() => handleMakeInstructor(user)}>
                                            Instructor
                                        </button>
                                    </td>
                                    <td >
                                        <button className="btn btn-ghost btn-sm bg-red-600  text-white" onClick={() => handleDelete(user)}><FaTrashAlt /></button>

                                    </td>

                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;