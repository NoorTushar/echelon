import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const Estate = ({ eachState, animation, duration }) => {
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
      <div className=" h-full bg-[#252525]">
         <div
            className="relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
         >
            <img
               src={estate_image_small}
               alt=""
               className="object-cover object-center w-full h-72 hover:scale-110 duration-300"
            />

            <span
               data-aos="zoom-in"
               data-aos-delay="250"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="absolute font-light tracking-[1px] px-4 py-2  bg-ourBlack top-0 -right-1 uppercase"
            >
               {status}
            </span>
            <span
               data-aos="zoom-in"
               data-aos-delay="250"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="absolute font-light tracking-[1px] px-4 py-2  bg-ourBlack bottom-0 left-0 uppercase"
            >
               {segment_name}
            </span>
            <span
               data-aos="zoom-in"
               data-aos-delay="250"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="absolute font-light tracking-[1px] px-4 py-2 bg-ourBlack bottom-0 right-0 "
            >
               {price}
            </span>
         </div>
         <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 flex-grow">
               <h2
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="text-[20px] font-light tracking-[2px] uppercase "
               >
                  {estate_title}
               </h2>
               <p
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="flex items-center gap-2"
               >
                  <FaLocationDot className="text-ourGold text-lg"></FaLocationDot>{" "}
                  {location}
               </p>
               <p
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="flex items-center gap-2"
               >
                  <FaHome className="text-ourGold text-lg"></FaHome> {area}
               </p>

               {description.length > 140 ? (
                  <p
                     data-aos="fade-right"
                     data-aos-delay="450"
                     data-aos-duration="700"
                     data-aos-easing="ease-in-out"
                  >
                     {description.slice(0, 140)} ...
                  </p>
               ) : (
                  <p
                     data-aos="fade-right"
                     data-aos-delay="450"
                     data-aos-duration="700"
                     data-aos-easing="ease-in-out"
                  >
                     {description}
                  </p>
               )}

               <ul
                  className="font-didact "
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
               >
                  Facilities:
                  {facilities.map((facility, index) => {
                     return (
                        <li
                           data-aos="fade-right"
                           data-aos-delay={`${(index + 4) * 100}`}
                           data-aos-duration="700"
                           data-aos-easing="ease-in-out"
                           key={index}
                           className="font-didact flex items-center gap-2"
                        >
                           <MdDone className="text-ourGold"></MdDone> {facility}
                        </li>
                     );
                  })}
               </ul>
            </div>
            <Link
               data-aos="zoom-in"
               data-aos-delay="250"
               data-aos-duration="800"
               data-aos-easing="ease-in-out"
               to={`/details/${id}`}
               className="px-6 py-3.5 w-1/2 mx-auto relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95 text-center"
            >
               <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
               <span className="relative group-hover:text-white">
                  view property
               </span>
            </Link>
         </div>
      </div>
   );
};

export default Estate;
