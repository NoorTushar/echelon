import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = ({ allEstates }) => {
   const estates = allEstates;
   console.log(estates);

   const mappedEstates = estates.map((eachState) => {
      return <Estate key={eachState.id} eachState={eachState}></Estate>;
   });

   return (
      <div className="max-w-[1170px] mx-auto w-[90%] md:w-[80%]">
         <div className="grid lg:grid-cols-2 gap-6">{mappedEstates}</div>
      </div>
   );
};

export default Estates;
