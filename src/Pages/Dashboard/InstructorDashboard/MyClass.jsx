/* eslint-disable no-undef */
import { Helmet } from "react-helmet-async";
import  { useEffect, useState } from "react";
import axios from "axios";

const MyClass = () => {

    const [classes, setClasses] = useState([]);


    useEffect(() => {
        // Fetch the classes for the instructor from the backend
        const fetchClasses = async () => {
            try {
                const response = await axios.get("/api/instructor/classes");
                setClasses(response.data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);
    return (
        <>
            <Helmet>
                <title>Akibuki | My Class </title>
            </Helmet>

            <div>
      <h1>My Classes</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Total Enrolled Students</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classData) => (
            <tr key={classData.id}>
              <td>{classData.name}</td>
              <td>{classData.status}</td>
              <td>{classData.totalEnrolledStudents}</td>
              <td>{classData.status === "denied" ? classData.feedback : "-"}</td>
              <td>
                <button onClick={() => handleUpdate(classData.id)}>Update</button>
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