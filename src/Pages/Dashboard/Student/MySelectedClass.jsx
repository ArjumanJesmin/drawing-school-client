/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from 'react';
import ShowMyClass from "./ShowMyClass";

const MySelectedClass = () => {
    const [selectedClassData, setSelectedClassData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myClass')
            .then(response => response.json())
            .then(data => setSelectedClassData(data))
    }, []);
    return (
        <div className="mx-4 ">
            <Helmet>
                <title >Akibuki | My Selected Class </title>
            </Helmet>

            <div className=" text-center mx-10 p-4 md:p-12 w-100% border rounded-lg shadow-md">
                <h2 className="text-2xl py-4 text-orange-800 font-semibold">My Selected Classes</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th > # </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>price</th>

                                <th>availableSeats</th>
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                selectedClassData.map((data, index)=> <ShowMyClass data={data} index={index} key={data._id}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;