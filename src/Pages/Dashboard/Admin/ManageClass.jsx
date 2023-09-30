/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";

const ManageClass = () => {

  const [showClass, setShowClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure()

  useEffect(() => {
    axiosSecure
      .get('/studentClass')
      .then((response) => {
        setShowClass(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching studentClass:", error);
      });
  }, [axiosSecure]);


  const handlePost = (data) => {
    axiosSecure
      .post('/manageClass', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class Posted successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error posting class:", error);
      });
  };

  // -----------handleDelete---------------
  const handleDelete = (user) => {
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
          .delete(`/manageClass/${user._id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              // refetch();
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
    <>
      <Helmet>
        <title>Akibuki | ManageClass </title>
      </Helmet>

      <div className="w-full">
        <SectionTitle heading="Manage" subHeading="Class" />
        <div className="overflow-x-auto  ">
          <table className="table table-zebra w-10/12 mx-auto border px-4 shadow-xl">
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
                  <td><button onClick={() => handlePost(data)} className="btn btn-sm bg-lime-600 text-white">Post</button></td>
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