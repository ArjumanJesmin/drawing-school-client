import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageClass = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch all the classes from the backend
        const fetchClasses = async () => {
          try {
            const response = await axios.get("/classes");
            setClasses(response.data);
          } catch (error) {
            console.error("Error fetching classes:", error);
          }
        };
    
        fetchClasses();
      }, []);

      const handleApprove = async (classId) => {
        try {
          // Send the request to approve the class to the backend
          await axios.put(`/classes/${classId}/approve`);
          
          // Update the class status in the frontend
    
        } catch (error) {
          console.error("Error approving class:", error);
        }
      };
    
      const handleDeny = async (classId) => {
        try {
          // Send the request to deny the class to the backend
          await axios.put(`/classes/${classId}/deny`);
          
          // Update the class status in the frontend
    
        } catch (error) {
          console.error("Error denying class:", error);
        }
      };
    
      const handleSendFeedback = async (classId, feedback) => {
        try {
          // Send the feedback for the class to the backend
          await axios.put(`/classes/${classId}/feedback`, { feedback });
          
          // Update the class feedback in the frontend
    
        } catch (error) {
          console.error("Error sending feedback:", error);
        }
      };
    return (
        <>
            <Helmet>
                <title>Akibuki | ManageClass </title>
            </Helmet>
            

            <div>
      <h1>Manage Classes</h1>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classData) => (
              <tr key={classData.id}>
                <td><img src={classData.image} alt="Class" /></td>
                <td>{classData.name}</td>
                <td>{classData.instructorName}</td>
                <td>{classData.instructorEmail}</td>
                <td>{classData.availableSeats}</td>
                <td>{classData.price}</td>
                <td>{classData.status}</td>
                <td>
                  {classData.status === "pending" && (
                    <>
                      <button onClick={() => handleApprove(classData.id)}>Approve</button>
                      <button onClick={() => handleDeny(classData.id)}>Deny</button>
                      <button onClick={() => handleSendFeedback(classData.id, "Your feedback")}>Send Feedback</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
        </>
    );
};

export default ManageClass;