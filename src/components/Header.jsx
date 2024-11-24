import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Header = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed bg-white w-full left-0 top-0 z-50">
            <div className="flex justify-between w-[90%] mx-auto items-center py-4">
                {children}
                <HiMenuAlt3
                    size={30}
                    onClick={toggleMenu}
                    className="md:hidden text-pink cursor-pointer  text-right"
                />
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
                <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                
            </div>
            <div className="bg-rose h-[1px]"></div>
        </header>
    );
};

export default Header;
