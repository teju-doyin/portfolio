import { FaLinkedin,FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='w-[90%] lg:w-[40%]  mx-auto py-3'>
        <div className="">
            <div className="flex text-pink justify-between items-center">
                <p className='text-brown font-medium text-[.8rem]'> 
                    © 2024 Teju. All rights reserved.
                </p>
                <Link
                to="mailto:tj.doyin@gmail.com"
                className="text-pink flex items-center gap-2 hover:underline"
              >
                <MdOutlineMarkEmailUnread size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/tejudoyin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <FaLinkedin/>
              </Link>
              <Link
                to="https://x.com/tj_doyin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <RiTwitterXFill/>
              </Link>
              <Link
                to="https://github.com/teju-doyin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <FaGithub />
              </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer