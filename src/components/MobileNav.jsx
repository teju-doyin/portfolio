import React from 'react'
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const MobileNav = ({toggleMenu,isMenuOpen}) => {
  return (
    <div
                    className={`fixed top-0 left-0 h-full w-full md:hidden bg-offWhite transform ${
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
                            className="text-pink font-semibold text-[20px]"
                        >
                            Home
                        </Link>
                        <Link
                            to="/ProjectsPage"
                            onClick={toggleMenu}
                            className="text-pink font-semibold text-[20px]"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/ContactPage"
                            onClick={toggleMenu}
                            className="cursor-pointer text-pink font-semibold text-[20px] flex items-center gap-4 border border-pink px-4 py-2 rounded-3xl hover:bg-white hover:transition hover:duration-500 hover:text-red-wine"
                        >
                            Let's Talk <FaArrowRightLong />
                        </Link>
                    </nav>
                </div>
  )
}

export default MobileNav