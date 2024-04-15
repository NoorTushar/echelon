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

   const { user, updateUserProfile } = useAuthContext();

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
         toast.success("Profile Updated");
      });
   };

   return (
      <div>
         <Helmet>
            <title>Profile Update | Echelon</title>
         </Helmet>
         <SectionTitle
            upperTitle={"welcome"}
            mainTitle={"update your profile"}
         ></SectionTitle>
         <div className="w-full max-w-lg space-y-4 mx-auto p-8 bg-ourBlack">
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* Name Field */}
               <div className="mt-4">
                  <label
                     htmlFor=""
                     className="uppercase font-light text-base tracking-[2px]"
                  >
                     Your Name
                  </label>
                  <input
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
                     className="uppercase font-light text-base tracking-[2px]"
                  >
                     Your email (cant be updated)
                  </label>
                  <input
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Must provide a valid email address.",
                        },
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Must provide a valid email address",
                        },
                     })}
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
                     className="uppercase font-light text-base tracking-[2px]"
                  >
                     your photo url
                  </label>
                  <input
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

               <button className="mt-9 w-full px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95">
                  <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                  <span className="relative group-hover:text-white">
                     update
                  </span>
               </button>
            </form>
         </div>
      </div>
   );
};

export default UpdateProfile;
