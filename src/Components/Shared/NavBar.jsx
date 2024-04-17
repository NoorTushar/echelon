import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuthContext from "../../Hooks/useAuthContext";
import RegisterButton from "./RegisterButton";

// Function to check if a URL is valid
function isValidURL(url) {
   if (!url) return false; // If URL is empty, consider it invalid
   const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
         "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
         "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
         "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
         "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
         "(\\#[-a-z\\d_]*)?$",
      "i"
   ); // fragment locator
   return !!pattern.test(url);
}

const navItems = (
   <>
      <li>
         <NavLink to={"/"}>Home</NavLink>
      </li>
   </>
);

const NavBar = () => {
   const { user } = useAuthContext();
   return (
      <nav className="navbar bg-ourBlack py-4 max-w-[1170px] mx-auto w-[90%] md:w-[80%] px-0">
         <div className="navbar-start flex items-center">
            <div className="dropdown ">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden pl-0"
               >
                  <GiHamburgerMenu className="text-ourGold text-2xl"></GiHamburgerMenu>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-[#252525] text-ourAsh text-[15px] font-light tracking-widest uppercase  w-52 closed-navItems z-50 *:tracking-[3px]"
               >
                  {navItems}
                  {user && (
                     <>
                        <li>
                           <NavLink to={"/offers"}>Special Offers</NavLink>
                        </li>
                        <li>
                           <NavLink to={"/updateProfile"}>
                              Update Profile
                           </NavLink>
                        </li>
                     </>
                  )}
               </ul>
            </div>
            <Link
               to={"/"}
               className=" text-xl md:text-3xl font-medium text-white cursor-pointer tracking-[2px] hover:text-ourGold duration-300"
            >
               ECHELON
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4 text-ourAsh text-[15px] font-light *:tracking-[3px] uppercase">
               {navItems}
               {user && (
                  <>
                     <li>
                        <NavLink to={"/offers"}>Special Offers</NavLink>
                     </li>
                     <li>
                        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
                     </li>
                  </>
               )}
            </ul>
         </div>
         <div className="navbar-end flex items-center gap-2.5">
            {user ? (
               <>
                  <div
                     className="tooltip  z-50  tooltip-bottom font-didact"
                     data-tip={user?.displayName || "No username set yet"}
                  >
                     <img
                        className="size-8 md:size-10 object-cover rounded-full cursor-pointer"
                        src={
                           isValidURL(user?.photoURL)
                              ? user?.photoURL
                              : "https://i.ibb.co/JztHRpy/default-profile-pic.png"
                        }
                        alt=""
                     ></img>
                  </div>

                  <LogoutButton></LogoutButton>
               </>
            ) : (
               <>
                  {" "}
                  <RegisterButton></RegisterButton>
                  <LoginButton></LoginButton>
               </>
            )}
         </div>
      </nav>
   );
};

export default NavBar;
