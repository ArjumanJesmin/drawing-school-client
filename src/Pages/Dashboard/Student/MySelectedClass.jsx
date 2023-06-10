import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MySelectedClass = () => {

    const [selectedClasses, setSelectedClasses] = useState([
        // Sample selected classes data
        {
            id: 1,
            name: 'Class 1',
            instructor: 'Instructor 1',
            price: 9.99,
        },
        // Add more selected classes as needed
    ]);

    const handleDeleteClass = (id) => {
        setSelectedClasses((prevSelectedClasses) =>
            prevSelectedClasses.filter((classData) => classData.id !== id)
        );
    };

    return (
        <>
            <Helmet>
                <title >Akibuki | My Selected Class </title>
            </Helmet>

            <div className=" text-center w-full m-10 border">
                <h2 className="text-2xl py-4 text-orange-800 font-semibold">My Selected Classes</h2>
                {selectedClasses.length === 0 ? (
                    <p>No selected classes</p>
                ) : (
                    <table className="table w-full shadow p-6 ">
                        <thead>
                            <tr className="text-xl text-cyan-900">
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl text-cyan-900">
                            {selectedClasses.map((classData) => (
                                <tr key={classData.id}>
                                    <td>{classData.name}</td>
                                    <td>{classData.instructor}</td>
                                    <td>${classData.price}</td>
                                    <td>
                                        <button
                                            className="btn btn-error"
                                            onClick={() => handleDeleteClass(classData.id)}
                                        >
                                            Delete
                                        </button>
                                        {/* Add Pay button and other relevant information */}
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

export default MySelectedClass;