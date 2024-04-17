import { Link } from "react-router-dom";

const LoginButton = () => {
   return (
      <Link
         to={"/login"}
         className="px-4 py-1.5 md:px-6 md:py-2.5 relative group overflow-hidden inline-block border-ourGold bg-ourGold text-white uppercase font-light text-[12px] sm:text-base tracking-[2px] transition-transform duration-300 ease-out transform active:scale-95"
      >
         <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-ourBlack group-hover:w-full opacity-90"></span>
         <span className="relative group-hover:text-white">login</span>
      </Link>
   );
};

export default LoginButton;
