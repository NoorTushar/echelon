import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import useAuthContext from "../../Hooks/useAuthContext";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   const test = useAuthContext();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   console.log(errors);

   const onSubmit = () => {
      const userName = getValues("userName");
      const email = getValues("email");
      const photoURL = getValues("photoURL");
      const password = getValues("password");

      console.log(userName, email, photoURL, password);

      // login with username and password
      //   loginUser(email, password)
      //      .then((result) => {
      //         console.log(result.user);
      //         locationState ? navigate(locationState) : navigate("/");
      //      })
      //      .catch((error) => {
      //         console.error(error);
      //      });
   };

   return (
      <div className="py-10 min-h-screen">
         <SectionTitle
            upperTitle={"join us"}
            mainTitle={"register"}
         ></SectionTitle>
         <div className="w-full max-w-lg space-y-4 mx-auto p-8 bg-ourBlack">
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* Name Field */}
               <div className="mt-4">
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
                  <input
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Must provide a valid email address.",
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
               <div className="mt-4">
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
               <div className="mt-4">
                  <div className="relative">
                     <input
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Must provide a password.",
                           },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password *"
                        className="w-full p-3 border-b border-gray-700 bg-ourBlack outline-none duration-300 font-didact focus:border-ourGold placeholder:text-ourAsh text-ourAsh"
                     />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-ourAsh">
                        {showPassword ? (
                           <FaEyeSlash onClick={() => setShowPassword(false)} />
                        ) : (
                           <FaRegEye onClick={() => setShowPassword(true)} />
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

               <button className="mt-9 w-full px-6 py-3.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95">
                  <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
                  <span className="relative group-hover:text-white">
                     register
                  </span>
               </button>
            </form>

            <p className="text-base text-center sm:px-6 text-ourAsh">
               Already have an account?{"  "}
               <Link
                  to={"/login"}
                  className="underline text-gray-100 font-semibold "
               >
                  Login
               </Link>
            </p>
            <p></p>
         </div>
      </div>
   );
};

export default Register;
