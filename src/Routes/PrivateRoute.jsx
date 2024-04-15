import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
   const { user } = useAuthContext();
   const location = useLocation();

   console.log(location);

   if (user) {
      return children;
   }

   return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
