import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
   const allEstates = useLoaderData();
   const { estateId } = useParams();

   const matchedEstate = allEstates.find(
      (eachState) => estateId == eachState.id
   );

   const {
      id,
      estate_title,
      segment_name,
      description,
      price,
      status,
      area,
      location,
      facilities,
      estate_image_small,
   } = matchedEstate;
   return (
      <div>
         <h3>Estate details : {id}</h3>
         <div className="w-full relative">
            <img
               className="w-full object-cover object-center"
               src={estate_image_small}
               alt=""
            />
            <div className="w-3/4 mx-auto grid grid-cols-4">
               <div>
                  <h3 className="font-light text-[15px] tracking-[3px] uppercase">
                     price
                  </h3>
                  <p>{price}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EstateDetails;
