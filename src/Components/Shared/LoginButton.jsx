import { Link } from "react-router-dom";

const LoginButton = () => {
   return (
      <Link
         to={"/login"}
         className="btn rounded-none px-6 border-ourGold bg-ourGold text-white uppercase font-light text-[15px] tracking-[2px] hover:opacity-80 hover:bg-ourGold hover:border-ourGold"
      >
         Login
      </Link>
   );
};

export default LoginButton;
