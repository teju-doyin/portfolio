import React from 'react'
import { Link } from 'react-router-dom';
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
            <Link
                to="/"
                onClick={toggleMenu}
                className="nav-link"
            >
                Home
            </Link>
            <Link
                to="/ProjectsPage"
                onClick={toggleMenu}
                className="nav-link"
            >
                Projects
            </Link>
            <Link
                to="/ContactPage"
                onClick={toggleMenu}
                className="cursor-pointer nav-link flex items-center gap-2 border border-pink px-4 py-2 rounded-md hover:bg-white hover:transition hover:duration-500 hover:text-red-wine"
            >
                Let's Talk <TbMessageChatbot />
            </Link>
        </nav>
    </div>
  )
}

export default MobileNav