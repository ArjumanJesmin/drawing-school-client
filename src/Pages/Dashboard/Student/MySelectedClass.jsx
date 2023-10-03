/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import React, { useContext, useEffect, useState } from 'react';
import ShowMyClass from "./ShowMyClass";
import { AuthContext } from "../../../providers/AuthProvider";
import SectionTitle from "../../../Components/SectionTitle";


const MySelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectedClassData, setSelectedClassData] = useState([]);

    const url = `https://akibuki-school-server-side.vercel.app/myClass?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setSelectedClassData(data)
            })
    }, [url]);

    return (
        <div className="w-10/12 ">
            <Helmet>
                <title >Akibuki | My Selected Class </title>
            </Helmet>
            <SectionTitle heading=" My Selected" subHeading="Class" />
            <div className="overflow-x-auto border shadow">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>availableSeats</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            selectedClassData.map((data, index) => <ShowMyClass data={data} index={index} key={data._id}  />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;