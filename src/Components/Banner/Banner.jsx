// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import "swiper/css/pagination";

import {
   Autoplay,
   EffectCreative,
   EffectFade,
   Navigation,
   Pagination,
} from "swiper/modules";

import { Link } from "react-router-dom";

import "./Banner.css";

const Banner = ({ allEstates }) => {
   const states = allEstates;

   return (
      <>
         <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
               clickable: true,
            }}
            slidesPerView={1}
            loop={true}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className="mySwiper"
         >
            {/* item 01 */}
            <SwiperSlide>
               <div
                  className="hero min-h-[calc(100vh-84px)] relative"
                  style={{
                     backgroundImage: `url(${states[0].estate_image_large})`,
                  }}
               >
                  <div className="hero-overlay bg-ourBlack bg-opacity-20"></div>
                  <div className="hero-content text-center ">
                     <div className="max-w-xl">
                        <p
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="50"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-4 text-sm font-light uppercase tracking-[15px] font-oswald"
                        >
                           {states[0].segment_name}
                        </p>
                        <h1
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="150"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-5 text-[60px] font-semibold tracking-[3px] uppercase leading-[75px]"
                        >
                           {states[0].estate_title}
                        </h1>

                        <Link
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="250"
                           data-aos-duration="700"
                           data-aos-easing="ease-in-out"
                           to={`/details/${states[0].id}`}
                           className="px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
                        >
                           <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                           <span className="relative group-hover:text-white">
                              view property
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>

            {/* item 02 */}
            <SwiperSlide>
               <div
                  className="hero min-h-[calc(100vh-84px)] relative"
                  style={{
                     backgroundImage: `url(${states[3].estate_image_large})`,
                  }}
               >
                  <div className="hero-overlay bg-ourBlack bg-opacity-20"></div>
                  <div className="hero-content text-center ">
                     <div className="max-w-xl">
                        <p
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="50"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-4 text-sm font-light uppercase tracking-[15px] font-oswald"
                        >
                           {states[3].segment_name}
                        </p>
                        <h1
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="150"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-5 text-[60px] font-semibold tracking-[3px] uppercase leading-[75px]"
                        >
                           {states[3].estate_title}
                        </h1>

                        <Link
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="250"
                           data-aos-duration="700"
                           data-aos-easing="ease-in-out"
                           to={`/details/${states[3].id}`}
                           className="px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
                        >
                           <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                           <span className="relative group-hover:text-white">
                              view property
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>

            {/* item 03 */}
            <SwiperSlide>
               <div
                  className="hero min-h-[calc(100vh-84px)] relative"
                  style={{
                     backgroundImage: `url(${states[8].estate_image_large})`,
                  }}
               >
                  <div className="hero-overlay bg-ourBlack bg-opacity-20"></div>
                  <div className="hero-content text-center ">
                     <div className="max-w-xl">
                        <p
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="50"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-4 text-sm font-light uppercase tracking-[15px] font-oswald"
                        >
                           {states[8].segment_name}
                        </p>
                        <h1
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="150"
                           data-aos-duration="700"
                           data-aos-once="false"
                           data-aos-easing="ease-in-out"
                           className="mb-5 text-[60px] font-semibold tracking-[3px] uppercase leading-[75px]"
                        >
                           {states[8].estate_title}
                        </h1>

                        <Link
                           data-aos="fade-up"
                           data-aos-offset="200"
                           data-aos-delay="250"
                           data-aos-duration="700"
                           data-aos-easing="ease-in-out"
                           to={`/details/${states[8].id}`}
                           className="px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
                        >
                           <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                           <span className="relative group-hover:text-white">
                              view property
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Banner;
