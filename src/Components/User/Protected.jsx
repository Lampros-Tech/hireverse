import { useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { users } from "../Data/users";

const Protected = ({children}) => {
    const navigate = useNavigate();

   if(!users){
       return <Navigate to={'/'} replace/>
   }
    return children;
}

export default Protected;