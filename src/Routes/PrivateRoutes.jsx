import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex justify-center"><progress className="progress w-56"></progress>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' replace={true} state={{from: location}}></Navigate>
};

export default PrivetRoute;