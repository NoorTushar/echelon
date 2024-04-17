import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import "./Estates.css";

const Estates = ({ allEstates }) => {
   const estates = allEstates;
   console.log(estates);

   const mappedEstatesSlides = estates.map((eachState, index) => {
      return (
         <SwiperSlide>
            <Estate
               animation={index % 2 === 0 ? "fade-right" : "fade-left"}
               duration="1000"
               key={eachState.id}
               eachState={eachState}
            ></Estate>
         </SwiperSlide>
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
               our
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               featured estates
            </h2>
         </div>

         <>
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               freeMode={true}
               pagination={{
                  clickable: true,
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 1,
                     spaceBetween: 40,
                  },
                  1024: {
                     slidesPerView: 2,
                     spaceBetween: 50,
                  },
               }}
               modules={[FreeMode, Pagination]}
               className="mySwiper py-10"
            >
               {mappedEstatesSlides}
            </Swiper>
         </>
      </section>
   );
};

export default Estates;
