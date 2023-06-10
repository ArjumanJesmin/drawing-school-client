import { Helmet } from "react-helmet-async";

const MyEnrollClass = () => {

    const enrolledClasses = [
        // Sample enrolled classes data
        {
            id: 1,
            name: 'Enrolled Class 1',
            instructor: 'Instructor 1',
            price: 19.99,
        },
        // Add more enrolled classes as needed
    ];
    return (
        <div className="w-full">
            <Helmet>
                <title>Akibuki | My Enroll Class </title>
            </Helmet>

            {/* -------------------------- */}
            <div className="border py-8 shadow-md">
                <h2 className="text-center text-2xl font-semibold text-lime-900"> My Enrolled Classes</h2>
                {enrolledClasses.length === 0 ? (
                    <p>No enrolled classes</p>
                ) : (
                    <table className="table w-full">
                        <thead>
                            <tr className="text-xl py-4 text-blue-800">
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                {/* Add more table headings as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledClasses.map((classData) => (
                                <tr key={classData.id}>
                                    <td>{classData.name}</td>
                                    <td>{classData.instructor}</td>
                                    <td>${classData.price}</td>
                                    {/* Add more table data as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyEnrollClass;