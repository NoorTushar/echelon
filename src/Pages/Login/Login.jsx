import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaGoogle, FaGithub, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   const { loginUser, loginWithGoogle, loginWithGitHub } = useAuthContext();

   const location = useLocation();
   const locationState = location.state;

   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   console.log(errors);

   // handle on submit form
   const onSubmit = () => {
      const email = getValues("email");
      const password = getValues("password");

      // login with username and password
      loginUser(email, password)
         .then((result) => {
            console.log(result.user);
            toast.success("Login Success");
            navigate(location?.state || "/");
         })
         .catch((error) => {
            let errorMessage = error.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            toast.error(`Login Unsuccessful: ${errorMessage}`);
         });
   };

   // login with google
   const handleLoginWithGoogle = () => {
      loginWithGoogle()
         .then((result) => {
            console.log(result.user);
            toast.success("Login Success");
            navigate(location?.state || "/");
         })
         .catch((error) => {
            let errorMessage = error.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            toast.error(`Login Unsuccessful: ${errorMessage}`);
         });
   };

   // login with gitHub
   const handleLoginWithGitHub = () => {
      loginWithGitHub()
         .then((result) => {
            console.log(result.user);
            toast.success("Login Success");
            navigate(location?.state || "/");
         })
         .catch((error) => {
            let errorMessage = error.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            toast.error(`Login Unsuccessful: ${errorMessage}`);
         });
   };

   return (
      <section className="py-10 min-h-[calc(100vh-84px)] max-w-[1170px] mx-auto w-[90%] md:w-[80%]">
         <Helmet>
            <title>Login | Echelon</title>
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
               account
            </h5>
            <h2
               data-aos="fade-up"
               data-aos-duration="700"
               data-aos-delay="200"
               data-aos-easing="ease-in-out"
               className="tracking-[5px] text-[45px] mb-5 uppercase"
            >
               login
            </h2>
         </div>
         <div className="w-full max-w-lg space-y-4 mx-auto px-4 bg-ourBlack">
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* Email Field */}
               <div
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="mt-4"
               >
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
               <div
                  data-aos="fade-right"
                  data-aos-delay="250"
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
                  <span className="relative group-hover:text-white">login</span>
               </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
               <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="px-3 text-base text-ourAsh"
               >
                  Login with social accounts
               </p>
               <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4 ">
               {/* Google Login */}
               <button
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  onClick={handleLoginWithGoogle}
                  className="p-3 rounded-sm"
               >
                  <FaGoogle className="text-xl hover:text-ourGold duration-300"></FaGoogle>
               </button>

               {/* GitHub login */}
               <button
                  data-aos="fade-left"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  onClick={handleLoginWithGitHub}
                  className="p-3 rounded-sm"
               >
                  <FaGithub className="text-2xl hover:text-ourGold duration-300"></FaGithub>
               </button>
            </div>
            <p
               data-aos="fade-right"
               data-aos-delay="250"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               className="text-base text-center sm:px-6 text-ourAsh"
            >
               Do not have an account?{"  "}
               <Link
                  state={locationState}
                  to={"/register"}
                  className="underline text-gray-100 font-semibold "
               >
                  Register
               </Link>
            </p>
            <p></p>
         </div>
      </section>
   );
};

export default Login;
