import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   const navigate = useNavigate();

   const handleGoHome = () => {
      navigate("./");
   };

   return (
      <div
         className="min-h-screen  relative flex items-center justify-center flex-col bg-ourBlack text-white bg-cover bg-no-repeat"
         style={{
            backgroundImage: "url('https://i.ibb.co/p3K2WPG/01-large.jpg')",
         }}
      >
         <div className="size-full bg-ourBlack bg-opacity-80 absolute"></div>

         <div className="z-10 text-center">
            <div>
               <h2 className="tracking-[5px] text-[45px] mb-5 uppercase">
                  {error.status}
               </h2>
               <p className="tracking-[5px] text-[45px] mb-5 uppercase">
                  Page {error.statusText || error.message}
               </p>
               <p className="text-2xl font-bold uppercase">{error.data}</p>
            </div>

            <Link
               to={"/"}
               className="mt-10 px-4 py-1.5 md:px-6 md:py-2.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
            >
               <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
               <span className="relative group-hover:text-white">
                  back to home
               </span>
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;
