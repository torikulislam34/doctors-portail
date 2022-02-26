import { useContext } from "react";
import { AuthContext } from "../context/authprovider/Authprovider";
// import { AuthContext } from "../context/authprovider/authprovider";


const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;

}

export default useAuth;