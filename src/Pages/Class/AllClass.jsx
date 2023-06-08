/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllClass = ({ item }) => {
    const { name, image, price, rating } = item
    const {user} = useContext(AuthContext)
    const navigate =useNavigate()

    if(user && user.email){
        // const classItem = {name, image,price,email:user.email}
        fetch('http://localhost:5000/classes',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify()
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            else{
                Swal.fire({
                    title: 'Please Login',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login new'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/login')
                    }
                  })
            }
        })
    }
    return (

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img  src={image} alt="" /></figure>
                <div className="card-body">
                <h3 className="uppercase">{name}</h3>
                    <p> Rating: {rating}</p>
                    <p className="text-yellow-500 pb-4"> price: ${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline ">Select</button>
                    </div>
                </div>
            </div>
    );
};

export default AllClass;