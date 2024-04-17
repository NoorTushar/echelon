import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const UpdateProfile = () => {
   const [errorMessage, setErrorMessage] = useState(null);

   const { user, updateUserProfile, setLoading } = useAuthContext();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm({
      defaultValues: {
         userName: `${user.displayName}`,
         email: `${user?.email || "Email hidden"}`,
         photoURL: `${user.photoURL}`,
      },
   });

   const onSubmit = () => {
      const userName = getValues("userName");
      const email = getValues("email");
      const photoURL = getValues("photoURL");
      const password = getValues("password");

      console.log(userName, email, photoURL, password);

      updateUserProfile(userName, photoURL).then(() => {
         setLoading(false);
         toast.success("Profile Updated");
      });
   };

   return (
      <section className="max-w-[1170px] mx-auto w-[90%] md:w-[80%] mt-[20px] md:mt-[30px] mb-[60px] md:mb-[100px]">
         <Helmet>
            <title>Update Profile | Echelon</title>
         </Helmet>

         {/* section title */}
         <div className="section-heading">
            <h5
               data-aos="fade-right"
               data-aos-delay="150"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="text-sm font-light tracking-[5px] uppercase"
            >
               hello{" "}
               <span className="text-yellow-600">
                  {user?.displayName ? user.displayName : "there"}
               </span>
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="100"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[45px] mb-5 uppercase"
            >
               update your profile
            </h2>
         </div>
         <div className="w-full max-w-lg space-y-4 mx-auto p-8 pt-0 pb-0 bg-ourBlack">
            <div>
               {user.photoURL && (
                  <img
                     data-aos="zoom-in"
                     data-aos-duration="700"
                     data-aos-delay="100"
                     data-aos-easing="ease-in-out"
                     className="size-[200px] mx-auto  object-cover"
                     src={user.photoURL}
                     alt=""
                  />
               )}
            </div>
            <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name Field */}
                  <div className="mt-8">
                     <label
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        htmlFor=""
                        className="uppercase font-light text-base tracking-[2px]"
                     >
                        Your Name
                     </label>
                     <input
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        {...register("userName", {
                           required: {
                              value: true,
                              message: "Must provide a username.",
                           },
                        })}
                        type="text"
                        placeholder="Name *"
                        className="w-full p-3 border-b border-gray-700 bg-ourBlack outline-none duration-300 font-didact focus:border-ourGold placeholder:text-ourAsh text-ourAsh"
                     />
                     {errors?.userName && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.userName.message}
                        </span>
                     )}
                     {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                     )}
                  </div>

                  {/* Email Field */}
                  <div className="mt-4">
                     <label
                        htmlFor=""
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        className="uppercase font-light text-base tracking-[2px]"
                     >
                        Your email (cant be updated)
                     </label>
                     <input
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        {...register("email")}
                        type="email"
                        disabled
                        placeholder="Email *"
                        className="w-full p-3 border-b border-gray-700 bg-ourBlack outline-none duration-300 font-didact focus:border-ourGold placeholder:text-ourAsh text-ourAsh"
                     />
                     {errors?.email && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.email.message}
                        </span>
                     )}
                     {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                     )}
                  </div>

                  {/* PhotoURL Field */}
                  <div className="mt-4">
                     <label
                        htmlFor=""
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-out"
                        className="uppercase font-light text-base tracking-[2px]"
                     >
                        your photo url
                     </label>
                     <input
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-out"
                        {...register("photoURL", {
                           required: {
                              value: true,
                              message: "Must provide a photo URL.",
                           },
                        })}
                        type="text"
                        placeholder="Photo URL *"
                        className="w-full p-3 border-b border-gray-700 bg-ourBlack outline-none duration-300 font-didact focus:border-ourGold placeholder:text-ourAsh text-ourAsh"
                     />
                     {errors?.photoURL && (
                        <span className="text-red-500 block mt-1 mb-2 font-didact">
                           {errors.photoURL.message}
                        </span>
                     )}
                     {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                     )}
                  </div>

                  {/* update button */}

                  <button
                     data-aos="zoom-in"
                     data-aos-duration="700"
                     data-aos-delay="100"
                     data-aos-easing="ease-in-out"
                     className="mt-9 w-full px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
                  >
                     <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                     <span className="relative group-hover:text-white">
                        update
                     </span>
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default UpdateProfile;
