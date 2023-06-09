import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const useCart = () => {
    const { user, loading } = useContext(AuthContext)
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/classes?email=${user?.email}`, { headers: {
               
            }})
            return res.json();
        },
        
    })

    return [cart, refetch]

}
export default useCart;