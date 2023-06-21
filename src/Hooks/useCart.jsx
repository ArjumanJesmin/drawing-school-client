/* eslint-disable no-undef */

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const useCart = () => {
    const { user, loading } = UseAuth()
  
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/studentClass?email=${user?.email}`)
            // console.log('res from axios', res);
            return res.data;
        },
        
    })
    return [cart, refetch]
}

export default useCart;