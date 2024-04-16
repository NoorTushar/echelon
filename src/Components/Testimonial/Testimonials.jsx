// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "./Testimonials.css";

const Testimonials = () => {
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] my-[60px] md:my-[100px]">
         {/* section title */}
         <div className="section-heading">
            <h5
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
            >
               what our clients say
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               Testimonials
            </h2>
         </div>

         <Swiper
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            {/* https://i.ibb.co/PZNzgD2/kevin.jpg
https://i.ibb.co/VCx6Y9F/negarin.jpg
https://i.ibb.co/1rtd4xJ/zech.jpg */}

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full  mx-auto">
               <div className="flex flex-col items-center w-full pt-0 p-6 space-y-8 rounded-md lg:h-full lg:p-8  ">
                  <img
                     src="https://i.ibb.co/PZNzgD2/kevin.jpg"
                     alt=""
                     className="w-20 h-20 rounded-full "
                  />
                  <blockquote className="max-w-lg text-lg font-didact italic font-medium text-center">
                     "I recently purchased my dream home through Echelon, and I
                     couldn't be happier with the service. The team was
                     incredibly professional and guided me through every step of
                     the process. Thanks to them, I found the perfect place to
                     call home!"
                  </blockquote>
                  <div className="text-center text-ourAsh">
                     <p>Leroy Jenkins</p>
                     <p>CEO of Petra Chemicals</p>
                  </div>
               </div>
            </SwiperSlide>

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full   mx-auto">
               <div className="flex flex-col items-center w-full pt-0 p-6 space-y-8 rounded-md lg:h-full lg:p-8  ">
                  <img
                     src="https://i.ibb.co/VCx6Y9F/negarin.jpg"
                     alt=""
                     className="w-20 h-20 rounded-full "
                  />
                  <blockquote className="max-w-lg text-lg font-didact italic font-medium text-center">
                     "From the moment I contacted them about buying my villa,
                     they provided exceptional support and expertise. Their
                     attention to detail and commitment to achieving the best
                     results for their clients truly sets them apart. I'm
                     thrilled with the outcome and grateful for their hard
                     work."
                  </blockquote>
                  <div className="text-center text-ourAsh">
                     <p>Emily Smith</p>
                     <p>CEO of Smith Courier</p>
                  </div>
               </div>
            </SwiperSlide>

            {/* Testimonial Item */}
            <SwiperSlide className="container w-full   mx-auto">
               <div className="flex flex-col items-center w-full pt-0 p-6 space-y-8 rounded-md lg:h-full lg:p-8  ">
                  <img
                     src="https://i.ibb.co/1rtd4xJ/zech.jpg"
                     alt=""
                     className="w-20 h-20 rounded-full "
                  />
                  <blockquote className="max-w-lg text-lg font-didact italic font-medium text-center">
                     "Working with Echelon was an absolute pleasure. They
                     listened attentively to my requirements and went above and
                     beyond to find properties that suited my needs. Their
                     knowledge of the market was impressive, and they negotiated
                     on my behalf to secure a fantastic deal. I'm extremely
                     satisfied with their professionalism and dedication."
                  </blockquote>
                  <div className="text-center text-ourAsh">
                     <p>David Johnson</p>
                     <p>Web Developer</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Testimonials;
