import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed bg-white w-full left-0 top-0 z-50">
            <div className="flex justify-between w-[90%] mx-auto items-center py-3">
                <img src={logo} alt="Logo" width={25} />
                <div className="md:hidden">
                    <HiMenuAlt3
                        style={{ color: '#e22c75', cursor: 'pointer' }}
                        size={30}
                        onClick={toggleMenu}
                    />
                </div>
                {/* Desktop Navigation */}
                <nav className="md:flex w-[60%] justify-between items-center hidden">
                    <Link to="/" className="text-red-wine font-semibold text-[20px]">
                        Home
                    </Link>
                    <Link to="/ProjectsPage" className="text-red-wine font-semibold text-[20px]">
                        Projects
                    </Link>
                    <Link
                        to="/ContactPage"
                        className="cursor-pointer text-red-wine font-semibold text-[20px] flex items-center gap-4 border border-red-wine px-4 py-2 rounded-3xl hover:bg-white hover:transition hover:duration-500 hover:text-red-wine"
                    >
                        Let's Talk <FaArrowRightLong />
                    </Link>
                </nav>
                {/* Mobile Navigation */}
                <div
                    className={`fixed top-0 left-0 h-full w-full md:hidden bg-offWhite transform ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
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
            </div>
            <div className="bg-rose h-[1px]"></div>
        </header>
    );
};

export default Header;
