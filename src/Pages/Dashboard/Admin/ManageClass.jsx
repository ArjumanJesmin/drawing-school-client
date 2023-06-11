/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClass = () => {

  const [showClass, setShowClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/studentClass')
      .then(res => res.json())
      .then(data => {
        setShowClass(data);
        setLoading(false)
      })
  }, [])


  const handlePost = (data) => {
    console.log(data)

    fetch('http://localhost:5000/manageClass', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class Posted successfully.',
          showConfirmButton: false,
          timer: 1500
        });

      })
  }

  // -----------handleDelete---------------
  const handleDelete = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/manageClass/${user._id}`, {
          method: 'DELETE',

        })

          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              // refatch();
              Swal.fire(
                'Deleted!',
                'Your class has been deleted.',
                'success'
              )
            }
          })

      }
    })
  }
  return (
    <>
      <Helmet>
        <title>Akibuki | ManageClass </title>
      </Helmet>

      <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Remaining Class: {showClass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>AvailableSeats</th>
                            <th>Delete</th>
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showClass.map((data, index) => <tr key={data._id}>
                                <th>{index + 1}</th>
                                <td>{data.className}</td>
                                <td>{data.instructor}</td>
                                <td>{data.price}</td>
                                <td>{data.availableSeats}</td>

                                <td><button onClick={() => handleDelete(data)} className="btn btn-sm bg-red-500  text-white">Reject</button></td>
                                <td><button onClick={() => handlePost(data)} className="btn btn-sm bg-yellow-500  text-white">Post</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default ManageClass;