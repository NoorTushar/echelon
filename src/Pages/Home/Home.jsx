import { Helmet } from "react-helmet-async";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const allEstates = useLoaderData();
   return (
      <div>
         <Helmet>
            <title>Home | Echelon</title>
         </Helmet>
         <Banner allEstates={allEstates}></Banner>
         <About></About>
         <Estates allEstates={allEstates}></Estates>
      </div>
   );
};

export default Home;
