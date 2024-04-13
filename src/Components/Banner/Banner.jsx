// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <Swiper className="mySwiper">
         <SwiperSlide>
            {/* item 01 */}
            <div
               className="hero min-h-screen"
               style={{
                  backgroundImage:
                     "url(https://shtheme.com/demosd/nowarch/wp-content/uploads/2022/03/1.jpg",
               }}
            >
               <div className="hero-overlay bg-ourBlack bg-opacity-40"></div>
               <div className="hero-content text-center ">
                  <div className="max-w-xl">
                     <p className="mb-4 text-sm font-light uppercase tracking-[15px] font-oswald">
                        residential
                     </p>
                     <h1 className="mb-5 text-[60px] font-semibold tracking-[3px] uppercase leading-[75px]">
                        the brown house
                     </h1>

                     <Link className="px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-200 ease-out transform hover:scale-105 active:scale-95">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-ourBlack group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">
                           view details
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default Banner;
