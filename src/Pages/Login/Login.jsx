import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaGoogle, FaGithub, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   console.log(errors);

   const onSubmit = () => {
      const email = getValues("email");
      const password = getValues("password");

      console.log(email, password);

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
            upperTitle={"account"}
            mainTitle={"login"}
         ></SectionTitle>
         <div className="w-full max-w-lg space-y-4 mx-auto p-8 bg-ourBlack">
            <form onSubmit={handleSubmit(onSubmit)}>
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
               <button className="btn block w-full mt-8 rounded-none border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] hover:opacity-80 hover:bg-ourGold hover:border-ourGold">
                  Login
               </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
               <p className="px-3 text-base text-ourAsh">
                  Login with social accounts
               </p>
               <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4 ">
               {/* Google Login */}
               <button className="p-3 rounded-sm">
                  <FaGoogle className="text-xl hover:text-ourGold duration-300"></FaGoogle>
               </button>
               {/* Twitter Login */}
               <button className="p-3 rounded-sm">
                  <FaXTwitter className="text-xl hover:text-ourGold duration-300"></FaXTwitter>
               </button>
               {/* GitHub login */}
               <button className="p-3 rounded-sm">
                  <FaGithub className="text-2xl hover:text-ourGold duration-300"></FaGithub>
               </button>
            </div>
            <p className="text-base text-center sm:px-6 text-ourAsh">
               Do not have an account?{"  "}
               <Link
                  to={"/register"}
                  className="underline text-gray-100 font-semibold "
               >
                  Register
               </Link>
            </p>
            <p></p>
         </div>
      </div>
   );
};

export default Login;
