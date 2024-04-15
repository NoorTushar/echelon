import { FaFacebookF, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
   return (
      <footer
         className="hero"
         style={{
            backgroundImage: "url(https://i.ibb.co/p3K2WPG/01-large.jpg)",
         }}
      >
         <div className="hero-overlay bg-ourBlack bg-opacity-90"></div>

         <div className="py-10 w-full">
            <div className=" text-center font-light space-y-1 mb-20">
               <h3 className="tracking-[5px] text-lg mb-2">CONTACT INFO</h3>
               <p className="text-[15px] ">+88 0168 302 1094</p>
               <p className="text-[15px] ">noor.tushar.khan@gmail.com</p>
            </div>

            <div className="grid  md:grid-cols-3 items-center gap-6 lg:gap-0  lg:justify-between w-full just-center">
               <div className="flex flex-col self-center text-sm text-center gap-2">
                  <p className="text-sm tracking-[.45px]">
                     ©2024, Echelon. All rights reserved.
                  </p>

                  <p className="text-sm tracking-[.45px]">
                     Website by{" "}
                     <strong>
                        <a href="https://www.facebook.com/NoorTusharKhan/">
                           Noor Tushar Khan
                        </a>
                     </strong>
                  </p>
               </div>
               <div className="flex justify-center space-x-2 lg:pt-0">
                  {/* facebook */}
                  <a
                     href="https://www.facebook.com/NoorTusharKhan/"
                     target="_blank"
                     className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer"
                  >
                     <FaFacebookF className="text-ourAsh text-sm"></FaFacebookF>
                  </a>

                  {/* linkedin */}
                  <a
                     href="https://www.linkedin.com/in/noortushar/"
                     target="_blank"
                     className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer"
                  >
                     <FaLinkedin className="text-ourAsh text-lg"></FaLinkedin>
                  </a>

                  {/* github */}
                  <a
                     href="https://github.com/NoorTushar"
                     target="_blank"
                     className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer"
                  >
                     <FaGithub className="text-ourAsh text-lg"></FaGithub>
                  </a>

                  {/* twitter */}
                  <a
                     href="https://twitter.com/NoorTusharKhan"
                     target="_blank"
                     className="size-11 border-[0.1px] border-ourAsh bg-opacity-80 rounded-full flex justify-center items-center bg-ourBlack cursor-pointer"
                  >
                     <FaXTwitter className="text-ourAsh text-base"></FaXTwitter>
                  </a>
               </div>
               <div className="flex justify-center items-center gap-6 text-sm tracking-[.4px]">
                  <p>Terms and conditions</p>
                  <p>Privacy Policy</p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
