/* eslint-disable no-unused-vars */

import { useQuery} from '@tanstack/react-query'

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery([],async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    return (
        <div>
            {
                users.length
            }
        </div>
    );
};

export default AllUsers;