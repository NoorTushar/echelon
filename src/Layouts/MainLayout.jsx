import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const MainLayout = () => {
   return (
      <div className="font-oswald">
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;
