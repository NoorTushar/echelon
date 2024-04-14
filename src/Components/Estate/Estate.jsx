import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Estate = ({ eachState }) => {
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
   } = eachState;
   return (
      <div>
         <div className="border border-ourGold h-full">
            <div className="relative overflow-hidden">
               <img
                  src={estate_image_small}
                  alt=""
                  className="object-cover object-center w-full h-72 hover:scale-110 duration-300"
               />

               <span className="absolute font-light tracking-[1px] px-4 py-2  bg-ourBlack top-0 right-0 uppercase">
                  {status}
               </span>
               <span className="absolute font-light tracking-[1px] px-4 py-2  bg-ourBlack bottom-0 left-0 uppercase">
                  {segment_name}
               </span>
               <span className="absolute font-light tracking-[1px] px-4 py-2 bg-ourBlack bottom-0 right-0 ">
                  {price}
               </span>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
               <div className="space-y-2 flex-grow">
                  <h2 className="text-[20px] font-light tracking-[2px] uppercase ">
                     {estate_title}
                  </h2>
                  <p className="flex items-center gap-1">
                     <FaLocationDot></FaLocationDot> {location}
                  </p>
                  <p className="flex items-center gap-1">
                     <FaHome></FaHome> {area}
                  </p>
                  <p className="">
                     {description.length > 200
                        ? description.slice(0, 200)
                        : description}
                  </p>
                  <ul className="font-didact">
                     Facilities:
                     {facilities.map((facility) => (
                        <li className="list-disc ml-5">{facility}</li>
                     ))}
                  </ul>
               </div>
               <Link
                  to={`/details/${id}`}
                  className="px-6 py-3.5 w-1/2 mx-auto relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95 text-center"
               >
                  <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                  <span className="relative group-hover:text-white">
                     view details
                  </span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Estate;
