import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   const { createUser, updateUserProfile, setLoading } = useAuthContext();

   const navigate = useNavigate();
   const location = useLocation();
   console.log(location);

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   const onSubmit = () => {
      const userName = getValues("userName");
      const email = getValues("email");
      const photoURL = getValues("photoURL");
      const password = getValues("password");

      console.log(userName, email, photoURL, password);

      createUser(email, password)
         .then((result) => {
            updateUserProfile(userName, photoURL).then(() => {
               setLoading(false);
               toast.success("Registration Successful");
               navigate(location?.state || "/");
            });
         })
         .catch((error) => {
            let errorMessage = error.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            toast.error(`Registration Unsuccessful: ${errorMessage}`);
         });
   };

   return (
      <section className="py-10 pb-0 min-h-[calc(100vh-84px)] max-w-[1170px] mx-auto w-[90%] md:w-[80%]">
         <Helmet>
            <title>Register | Echelon</title>
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
               join us
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="200"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[45px] mb-5 uppercase"
            >
               register
            </h2>
         </div>
         <div className="w-full max-w-lg space-y-4 mx-auto px-4  bg-ourBlack">
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* Name Field */}
               <div
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="mt-4"
               >
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
               <div
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="mt-4"
               >
                  <input
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Must provide an email",
                        },
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Must provide a valid email address",
                        },
                     })}
                     type="email"
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
               <div
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="mt-4"
               >
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

               {/* Password Field */}
               <div
                  data-aos="fade-right"
                  data-aos-delay="450"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="mt-4"
               >
                  <div className="relative">
                     <input
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Must provide a password.",
                           },
                           minLength: {
                              value: 6,
                              message:
                                 "Password must be at least of 6 characters",
                           },
                           pattern: {
                              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d!@#$%^&*()]?).{6,}$/,
                              message:
                                 "Must have at least one uppercase letter and one lowercase letter.",
                           },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password *"
                        className="w-full p-3 border-b border-gray-700 bg-ourBlack outline-none duration-300 font-didact focus:border-ourGold placeholder:text-ourAsh text-ourAsh"
                     />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-ourAsh">
                        {showPassword ? (
                           <FaRegEye onClick={() => setShowPassword(false)} />
                        ) : (
                           <FaEyeSlash onClick={() => setShowPassword(true)} />
                        )}
                     </span>
                  </div>
                  {errors?.password && (
                     <span className="text-red-500 block mt-1 mb-2 font-didact">
                        {errors.password.message}
                     </span>
                  )}
               </div>

               {/* login button */}

               <button
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="mt-9 w-full px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
               >
                  <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                  <span className="relative group-hover:text-white">
                     register
                  </span>
               </button>
            </form>

            <p
               data-aos="fade-up"
               data-aos-delay="150"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="text-base text-center sm:px-6 text-ourAsh"
            >
               Already have an account?{"  "}
               <Link
                  to={"/login"}
                  className="underline text-gray-100 font-semibold "
               >
                  Login
               </Link>
            </p>
         </div>
      </section>
   );
};

export default Register;
