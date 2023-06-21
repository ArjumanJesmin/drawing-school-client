/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import React, { useContext, useEffect, useState } from 'react';
import ShowMyClass from "./ShowMyClass";
import { AuthContext } from "../../../providers/AuthProvider";


const MySelectedClass = () => {
    const {user} = useContext(AuthContext)
    const [selectedClassData, setSelectedClassData] = useState([]);

    const url = `https://akibuki-school-server-side.vercel.app/myClass?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setSelectedClassData(data)
                setSelectedClassData(data)
            })
    }, [url]);
    console.log(selectedClassData);
    return (
        <div className="mx-4 ">
            <Helmet>
                <title >Akibuki | My Selected Class </title>
            </Helmet>

            <h3 className="text-3xl font-semibold my-4">Total Subject: {selectedClassData?.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>availableSeats</th>
                                <th>Delete</th>
                                <th>Payment</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                selectedClassData.map((data, index) => <ShowMyClass data={data} index={index} key={data._id} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        // </div>
    );
};

export default MySelectedClass;