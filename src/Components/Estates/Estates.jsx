import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = ({ allEstates }) => {
   const estates = allEstates;
   console.log(estates);

   const mappedEstates = estates.map((eachState, index) => {
      return (
         <Estate
            animation={index % 2 === 0 ? "fade-right" : "fade-left"}
            duration="1000"
            key={eachState.id}
            eachState={eachState}
         ></Estate>
      );
   });

   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] my-[60px] md:my-[100px]">
         {/* section title */}
         <div className="section-heading">
            <h5
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
            >
               get to know
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               about us
            </h2>
         </div>

         {/* states container */}
         <div className="grid lg:grid-cols-2 gap-6">{mappedEstates}</div>
      </section>
   );
};

export default Estates;
