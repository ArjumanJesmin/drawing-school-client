/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const AllClass = ({ classData }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [availableSeats, setAvailableSeats] = useState(10);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useContext(AuthContext)

    const { _id, name, image, price, instructor } = classData

    //-------------------------------
    const handleCourseSelection = (classData) => {
        console.log(classData,user? user.email:'');
       

        if (user && user.email) {
            const classItem = { name, image, availableSeats, email: user? user.email:'' }
            fetch('https://akibuki-school-server-side.vercel.app/myClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log({ data });

                    if (data.insertedId) {
                        // refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'This class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            })
        }

    };
    //-------------------------------
    return (
        <>
            <div
                // key={index}
                style={{
                    backgroundColor: availableSeats === 0 ? 'red' : 'white',
                    padding: '10px',
                    marginBottom: '10px',
                }}
            >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <img  src={image} alt="Class" />
                    <div className="card-body">
                        <h2>{name}</h2>
                        <p>Instructor: {instructor}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p className="text-yellow-500 pb-4">Price: ${price}</p>

                        {/* Select button */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline "
                                disabled={availableSeats === 0 || isAdmin || isInstructor}
                                onClick={() => handleCourseSelection(classData)}
                                style={{ background: availableSeats === 0 ? 'red' : 'transparent' }}
                            >
                                Select
                            </button>
                        </div>
                        {/* Select button */}

                    </div>
                </div>
            </div>

        </>
    );
};

export default AllClass;