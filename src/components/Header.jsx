import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbMessageChatbot } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed bg-white w-full left-0 top-0 z-50 shadow">
      <div className="flex justify-between w-[90%] mx-auto items-center py-4">
        {children}
        <HiMenuAlt3
          size={30}
          onClick={toggleMenu}
          className="lg:hidden text-pink cursor-pointer"
        />
        <nav className="hidden lg:flex w-[60%] justify-between items-center lg:w-[40%] lg:max-w-[400px]">
          <div className="flex gap-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink font-semibold border-b-2 border-pink"
                  : "text-lightPink font-medium hover:text-pink hover:transition hover:delay-100"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/ProjectsPage"
              className={({ isActive }) =>
                isActive
                  ? "text-pink font-semibold border-b-2 border-pink"
                  : "text-lightPink font-medium hover:text-pink hover:transition hover:delay-100"
              }
            >
              Projects
            </NavLink>
          </div>
          <NavLink
            to="/ContactPage"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-pink font-bold px-4 py-2 rounded-md flex items-center gap-2"
                : "text-lightPink border font-medium border-pink px-4 py-2 rounded-md flex items-center gap-2 hover:text-pink hover:bg-white hover:transition hover:delay-100"
            }
          >
            Let's Talk <TbMessageChatbot />
          </NavLink>
        </nav>
        <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="bg-rose h-[1px]"></div>
    </header>
  );
};

export default Header;
