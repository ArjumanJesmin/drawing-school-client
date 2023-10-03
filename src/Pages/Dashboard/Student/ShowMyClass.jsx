/* eslint-disable react/prop-types */

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AiFillDelete } from 'react-icons/Ai';
import { MdPayment } from 'react-icons/Md';
import Modal from "./Payment/Modal";

const ShowMyClass = ({ data, index }) => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }
  // -----------handleDelete---------------
  const handleDelete = () => {
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
          .delete(`/myClass/${user._id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your class has been deleted.',
                'success'
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting class:", error);
          });
      }
    });
  };

  return (

    < >
      <tr key={data._id}>
        <th>{index + 1}</th>
        <th><img className='w-12 h-12 rounded-2xl' src={data.image} alt="" /></th>
        <td>{data.email}</td>
        <td >{data.availableSeats}</td>
        <td >
          <p onClick={() => handleDelete(data._id)} className=" text-2xl text-red-500 mx-4"><AiFillDelete /></p>
        </td>
        <td>
          <button onClick={openModal} className="text-2xl mx-4 text-amber-500"><MdPayment /></button>
        </td>
        {isOpen && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data}  />
        )}
      </tr>
    </>
  );
};

export default ShowMyClass;