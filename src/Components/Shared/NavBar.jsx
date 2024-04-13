import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const navItems = (
   <>
      <li>
         <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
         <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
         <NavLink to={"/contact"}>Contact</NavLink>
      </li>
   </>
);

const NavBar = () => {
   return (
      <div className="navbar bg-ourBlack py-4">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[10] p-4 shadow bg-ourBlack text-ourAsh text-[15px] font-light tracking-widest uppercase  w-52 closed-navItems"
               >
                  {navItems}
               </ul>
            </div>
            <Link
               to={"/"}
               className="text-3xl font-medium text-white cursor-pointer tracking-wider hover:text-ourGold duration-300"
            >
               ECHELON
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4 text-ourAsh text-[15px] font-light tracking-widest uppercase">
               {navItems}
            </ul>
         </div>
         <div className="navbar-end">
            <LoginButton></LoginButton>
         </div>
      </div>
   );
};

export default NavBar;
