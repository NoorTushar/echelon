import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      estate_image_large,
      Latitude,
      Longitude,
   } = matchedEstate;
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] mt-[20px] md:mt-[30px] mb-[60px] md:mb-[100px]">
         <Helmet>
            <title>{estate_title}</title>
         </Helmet>
         {/* top */}
         <div className="w-full relative">
            {/* image */}
            <img
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
               className="w-full object-cover object-center"
               src={estate_image_large}
               alt=""
            />
            {/* information */}
            <div className="text-center lg:text-start relative w-[85%] md:w-3/4 mx-auto grid gap-8 lg:gap-0 md:grid-cols-2 grid-cols-2 lg:grid-cols-4 p-8 z-10 bg-[#252525] left-0 right-0 bottom-14">
               {/* 1 */}
               <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  className=""
               >
                  <h3 className="font-light text-[15px] tracking-[3px] uppercase mb-1.5">
                     price
                  </h3>
                  <p className="text-[15px] tracking-[0.25px]">{price}</p>
               </div>

               {/* 2 */}
               <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="150"
                  data-aos-easing="ease-in-out"
                  className=""
               >
                  <h3 className="font-light text-[15px] tracking-[3px] uppercase mb-1.5">
                     location
                  </h3>
                  <p className="text-[15px] tracking-[0.25px]">{location}</p>
               </div>

               {/* 3 */}
               <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  className=""
               >
                  <h3 className="font-light text-[15px] tracking-[3px] uppercase mb-1.5">
                     size
                  </h3>
                  <p className="text-[15px] tracking-[0.25px]">{area}</p>
               </div>

               {/* 4 */}
               <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="250"
                  data-aos-easing="ease-in-out"
                  className=""
               >
                  <h3 className="font-light text-[15px] tracking-[3px] uppercase mb-1.5">
                     status
                  </h3>
                  <p className="text-[15px] tracking-[0.25px] capitalize">
                     {status}
                  </p>
               </div>
            </div>
         </div>

         {/* body details */}
         <div>
            <span
               data-aos="fade-right"
               data-aos-delay="150"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="text-sm font-light tracking-[5px] uppercase"
            >
               {segment_name}
            </span>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[45px] mb-5 uppercase"
            >
               {estate_title}
            </h2>

            <p
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               {description}
            </p>

            <ul className="my-7">
               {facilities.map((facility, index) => {
                  return (
                     <li
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                        data-aos-delay={`${index * 100}`}
                        key={index}
                        className="font-didact flex items-center gap-4"
                     >
                        <MdDone className="text-ourGold"></MdDone> {facility}
                     </li>
                  );
               })}
            </ul>
         </div>

         <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
         >
            <MapContainer
               center={[Latitude, Longitude]}
               zoom={13}
               scrollWheelZoom={false}
               className="h-[500px]"
            >
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[Latitude, Longitude]}>
                  <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
      </section>
   );
};

export default EstateDetails;
