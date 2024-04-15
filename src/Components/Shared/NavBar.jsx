import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuthContext from "../../Hooks/useAuthContext";

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
   const { user } = useAuthContext();
   return (
      <div className="navbar bg-ourBlack py-4">
         <div className="navbar-start flex items-center">
            <div className="dropdown ">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <GiHamburgerMenu className="text-ourGold text-2xl"></GiHamburgerMenu>
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
         <div className="navbar-end flex items-center gap-2">
            {user ? (
               <>
                  <div
                     className="tooltip  tooltip-bottom font-didact"
                     data-tip={user?.displayName || "No username set yet"}
                  >
                     <img
                        className="size-10 object-cover rounded-full cursor-pointer"
                        src={
                           user?.photoURL || "/public/default-profile-pic.png"
                        }
                        alt=""
                     ></img>
                  </div>

                  <LogoutButton></LogoutButton>
               </>
            ) : (
               <LoginButton></LoginButton>
            )}
         </div>
      </div>
   );
};

export default NavBar;
