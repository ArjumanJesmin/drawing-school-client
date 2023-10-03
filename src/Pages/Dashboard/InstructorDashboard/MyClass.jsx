/* eslint-disable no-undef */
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClass = () => {

  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure()
  const {user} =  useContext(AuthContext)

  const handleUpdate = (data) => {
    axiosSecure
      .post(`/paymentHistory?email=${user?.email}`, data)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class Posted successfully.',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Error updating class:", error);
      });
  }

  useEffect(() => {
    axiosSecure
      .get('/studentClass')
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [axiosSecure]);


  return (
    <>
      <Helmet>
        <title>Akibuki | My Class </title>
      </Helmet>
      <h1 className="text-3xl font-semibold my-4">My Classes</h1>

      <div className="w-10/12 m-6 border px-4 shadow-2xl rounded-xl">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classData, index) => (
              <tr key={classData._id}>
                <td>{index + 1}</td>
                <td>{classData.className}</td>
                <td>{classData.instructor}</td>
                <td>{classData.availableSeats}</td>

                <td>
                  <button className="bg-green-600 rounded-sm px-4 py-2 text-white sm-small" onClick={() => handleUpdate(classData._id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;