
import { useQuery } from "@tanstack/react-query";
// import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is admin response', res)
            return res.data.admin;
        }
    })
    console.log(isInstructor)
    return [isInstructor, isInstructorLoading]

}
export default useInstructor;