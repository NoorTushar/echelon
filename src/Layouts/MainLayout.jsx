import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
   return (
      <div className="font-oswald bg-ourBlack text-white overflow-x-hidden">
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;
