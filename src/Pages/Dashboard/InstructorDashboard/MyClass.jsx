/* eslint-disable no-undef */
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const MyClass = () => {

  const [classes, setClasses] = useState([]);


  const handleUpdate = (data) => {

    fetch(`https://akibuki-school-server-side.vercel.app/paymentHistory?email=${user?.email}`, {
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

  useEffect(() => {
    fetch('https://akibuki-school-server-side.vercel.app/studentClass')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Akibuki | My Class </title>
      </Helmet>

      <div className="w-full m-6">
        <h1 className="text-3xl font-semibold my-4">My Classes</h1>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
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
                <td>{classData.availableSeats === "denied" ? classData.availableSeats : "-"}</td>
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