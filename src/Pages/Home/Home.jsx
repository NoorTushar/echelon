import { Helmet } from "react-helmet-async";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home | Echelon</title>
         </Helmet>
         <Banner></Banner>
         <About></About>
         <Estates></Estates>
      </div>
   );
};

export default Home;
