import { Helmet } from "react-helmet-async";

const OfferPage = () => {
   return (
      <section className="max-w-[1170px] min-h-[calc(100vh-84px)] mx-auto w-[90%] md:w-[80%] pt-[20px] md:pt-[30px] pb-[60px] md:pb-[100px]">
         <Helmet>
            <title>Special Offers | Echelon</title>
         </Helmet>

         {/* section title */}
         <div className="section-heading">
            <h5
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="text-sm font-light tracking-[5px] uppercase"
            >
               exclusive
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="150"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[45px] mb-5 uppercase"
            >
               deals
            </h2>
         </div>

         <p className="text-xl mb-8">
            Please collect the below codes based on your mode of purchasing our
            service. These codes are only applicable to your email id only.
            Share it with us while making the final order. Click and drag your
            mouse to the right to see the coupon code.
         </p>

         {/* for rents */}
         <div className="mb-[30px]">
            <h3
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="150"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[26px] mb-5 uppercase"
            >
               for rents
            </h3>
            <div
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="350"
               data-aos-easing="ease-in-out"
               className="diff w-full h-[300px] border"
            >
               <div className="diff-item-1">
                  <div className="bg-[#252525] font-oswald uppercase text-4xl  grid place-content-center">
                     25% Discount
                  </div>
               </div>
               <div className="diff-item-2">
                  <div className="bg-ourBlack text-ourGold text-7xl  grid place-content-center">
                     ECH042302
                  </div>
               </div>
               <div className="diff-resizer"></div>
            </div>
         </div>

         {/* for purchase */}
         <div>
            <h3
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="150"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[26px] mb-5 uppercase"
            >
               for buying
            </h3>
            <div
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="350"
               data-aos-easing="ease-in-out"
               className="diff w-full h-[300px] border"
            >
               <div className="diff-item-1">
                  <div className="bg-[#252525] font-oswald uppercase text-4xl  grid place-content-center">
                     10% Discount
                  </div>
               </div>
               <div className="diff-item-2">
                  <div className="bg-ourBlack text-ourGold text-7xl  grid place-content-center">
                     ECH035218
                  </div>
               </div>
               <div className="diff-resizer"></div>
            </div>
         </div>
      </section>
   );
};

export default OfferPage;
