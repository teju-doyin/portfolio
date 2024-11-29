import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";

const MobileNav = ({toggleMenu,isMenuOpen}) => {
  return (
    <div
        className={`fixed top-0 left-0 h-full w-full lg:hidden bg-offWhite transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out`}
    >
        <IoClose
            style={{
                color: 'e22c75',
                cursor: 'pointer',
                marginLeft: 'auto',
                marginTop: '1rem',
                marginRight: '1rem',
            }}
            size={40}
            onClick={toggleMenu}
        />
        <nav className="mt-24 flex flex-col justify-center items-center p-4 space-y-10">
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
          {/* </div> */}
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
    </div>
  )
}

export default MobileNav