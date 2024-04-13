import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const MainLayout = () => {
   return (
      <div className="font-oswald bg-ourBlack text-white">
         <NavBar></NavBar>
         <Outlet></Outlet>
         <div>
            <h3>Hello</h3>
         </div>
      </div>
   );
};

export default MainLayout;
