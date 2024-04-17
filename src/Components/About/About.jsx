import SectionTitle from "../Shared/SectionTitle";

const About = () => {
   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] my-[60px] md:my-[100px]">
         {/* section title */}
         <div className="section-heading">
            <h5
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
            >
               get to know
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
            >
               about us
            </h2>
         </div>

         <div className="lg:flex">
            <div className=" p-4 lg:w-1/3 bg-[#252525]  h-min">
               <p>
                  At Echelon, we pride ourselves on being more than just a real
                  estate agency – we are your trusted partner in finding your
                  dream home or investment property. With years of experience
                  and a commitment to excellence, our team of dedicated agents
                  understands the unique needs and desires of each client.
                  Whether you're a first-time homebuyer, seasoned investor, or
                  looking to sell your property, we provide personalized service
                  and expert guidance every step of the way.
               </p>
            </div>

            <div className="lg:w-2/3 ">
               <img
                  src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
               />
            </div>
         </div>
      </section>
   );
};

export default About;
