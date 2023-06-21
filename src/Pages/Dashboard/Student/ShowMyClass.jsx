/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowMyClass = ({ data, index }) => {
  // const {_id, name, email, availableSeats,image}
  return (

    < >

      <tr key={data._id}>
        <th>{index + 1}</th>
        <th><img className='w-12 h-12 rounded-2xl' src={data.image} alt="" /></th>
        <td>{data.className}</td>
        <td>{data.email}</td>
        <td >{data.availableSeats}</td>


        <td >
        <button className="btn btn-sm bg-red-400 mx-4">Delete</button>

        </td>

        <td >
        <Link to='/dashboard/payment'><button className="badge badge-ghost mx-4">pay</button></Link>

        </td>

      </tr>
    </>
  );
};

export default ShowMyClass;