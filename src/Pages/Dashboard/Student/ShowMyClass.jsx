/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowMyClass = ({ data, index }) => {
  return (

    < >

      <tr>
        <td>{index + 1}</td>

        <td>
          <div className="flex items-center px-4 md:px-8  w-full">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td> <div className="font-bold">{data.instructor}</div></td>
        <td> <div className="text-sm opacity-50">{data.name}</div></td>
        <td> <p>{data.price}</p> </td>
        <td><p>{data.availableSeats}</p></td>
        <td><button className="btn btn-sm bg-red-400 mx-4">Delete</button></td>
        <td><Link to='/dashboard/payment'><button className="badge badge-ghost mx-4">pay</button></Link></td>
      </tr>
    </>
  );
};

export default ShowMyClass;