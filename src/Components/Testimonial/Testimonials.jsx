const Testimonials = () => {
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] my-[60px] md:my-[100px]">
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

         <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full pt-0 p-6 space-y-8 rounded-md lg:h-full lg:p-8  ">
               <img
                  src="https://source.unsplash.com/random/100x100?4"
                  alt=""
                  className="w-20 h-20 rounded-full "
               />
               <blockquote className="max-w-lg text-lg font-didact italic font-medium text-center">
                  "Et, dignissimos obcaecati. Recusandae praesentium doloribus
                  vitae? Rem unde atque mollitia!"
               </blockquote>
               <div className="text-center text-ourAsh">
                  <p>Leroy Jenkins</p>
                  <p>CEO of Company Co.</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
