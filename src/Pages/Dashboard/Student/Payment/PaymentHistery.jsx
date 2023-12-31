// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../provicers/AuthProvider';
// import { useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistery = () => {
    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState([])
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure
            .get(`/paymentHistory?email=${user?.email}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching payment history:', error);
            });
    }, [axiosSecure, user?.email]);

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="History" />
            <div className="w-full mx-auto border p-4 rounded-2xl">
                <Helmet>
                    <title>Akibuki | payment History</title>
                </Helmet>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-800 text-white">
                                <th>#</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Payment Date</th>
                                <th>TransactionId</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.email}</td>
                                        <td >{user.price}</td>
                                        <td >{user.date}</td>
                                        <td >{user.transactionId}</td>
                                        <td >{user.status}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistery;