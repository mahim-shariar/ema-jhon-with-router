import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";

let useAuth =()=>{
    return useContext(AuthContext);
}

export default useAuth;