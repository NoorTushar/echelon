import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { MdOutlineDesk } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

import "./OurService.css";

const OurService = () => {
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%]">
         <div className="section-heading">
            <h5
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
            >
               why choose us
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               our services
            </h2>
         </div>

         {/* card container */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 *:border *:border-ourGold">
            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
            >
               <BsLightningCharge className="service-logo" />
               <h3 className="service-title">Quick services</h3>
               <p className="service-description">
                  Our team ensures swift responses and efficient transactions,
                  prioritizing your needs every step of the way.
               </p>
            </div>

            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               <IoPeopleOutline className="service-logo" />
               <h3 className="service-title">Expert team</h3>
               <p className="service-description">
                  Backed by seasoned professionals, we offer expert guidance and
                  support, ensuring informed decisions and seamless experiences
                  for our clients.
               </p>
            </div>

            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="200"
               data-aos-easing="ease-in-out"
            >
               <RiBuilding2Line className="service-logo" />
               <h3 className="service-title">Luxurious properties</h3>
               <p className="service-description">
                  Step into a world of elegance and comfort with our
                  meticulously designed residences, where luxury meets
                  functionality to create your perfect living space.
               </p>
            </div>

            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="400"
               data-aos-easing="ease-in-out"
            >
               <GrMoney className="service-logo" />
               <h3 className="service-title">EMI facility</h3>
               <p className="service-description">
                  Owning your dream home has never been easier with our flexible
                  EMI options, providing you with the financial freedom to make
                  your aspirations a reality without added stress.
               </p>
            </div>

            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="500"
               data-aos-easing="ease-in-out"
            >
               <MdOutlineDesk className="service-logo" />
               <h3 className="service-title">Modern fittings</h3>
               <p className="service-description">
                  Embrace the essence of contemporary living with our
                  state-of-the-art fittings and fixtures, curated to enhance
                  your lifestyle and elevate your everyday experiences.
               </p>
            </div>

            {/* each card */}
            <div
               className="service-card"
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="600"
               data-aos-easing="ease-in-out"
            >
               <GrMapLocation className="service-logo" />
               <h3 className="service-title">Awesome location</h3>
               <p className="service-description">
                  Discover the ideal balance of convenience and tranquility with
                  our prime locations, offering easy access to urban amenities
                  and scenic surroundings.
               </p>
            </div>
         </div>
      </section>
   );
};

export default OurService;
