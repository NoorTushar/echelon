import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
   const estates = useLoaderData();
   console.log(estates);

   const mappedEstates = estates.map((eachState) => {
      return <Estate key={eachState.id} eachState={eachState}></Estate>;
   });

   return (
      <div>
         <div className="grid lg:grid-cols-3">{mappedEstates}</div>
      </div>
   );
};

export default Estates;
