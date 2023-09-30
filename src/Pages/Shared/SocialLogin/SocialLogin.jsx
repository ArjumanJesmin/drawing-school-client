import { useContext } from "react";
import { FcGoogle } from "react-icons/Fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                axiosSecure
                    .post('/users', saveUser)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.error('Error while making POST request:', error);
                    });
            });
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center">
                <button
                   onClick={handleGoogleSignIn}
                    className="  transition-all  ring-offset-1 ring-gray-200"
                >
                    <p className="flex items-center gap-2">
                        <FcGoogle className="text-2xl" />{" "}
                        <span className="text-base normal-case font-semibold">Google</span>
                    </p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;