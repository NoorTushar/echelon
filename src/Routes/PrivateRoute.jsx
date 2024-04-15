import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import { Triangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuthContext();
   const location = useLocation();

   if (loading) {
      return (
         <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <Triangle
               visible={true}
               height="80"
               width="80"
               color="#8E6D45"
               ariaLabel="triangle-loading"
               wrapperStyle={{}}
               wrapperClass=""
            />
         </div>
      );
   }

   if (user) {
      return children;
   }

   return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
