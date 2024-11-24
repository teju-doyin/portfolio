import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='w-[90%] mx-auto py-3'>
        <div className="">
            <div className="flex text-pink justify-between items-center">
                <p className='text-brown font-medium text-[.8rem]'> 
                    © 2024 Teju. All rights reserved.
                </p>
                {/* <FaLinkedin />
                <RiTwitterXFill />
                <FaGithub /> */}
                <a
                href="mailto:tj.doyin@gmail.com"
                className="text-pink flex items-center gap-2 hover:underline"
              >
                <MdOutlineMarkEmailUnread size={20} />
                {/* tj.doyin@gmail.com */}
              </a>
              <a
                href="https://www.linkedin.com/in/tejudoyin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <FaLinkedin/>
              </a>
              <a
                href="https://x.com/tj_doyin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <RiTwitterXFill/>
              </a>
              <a
                href="https://github.com/teju-doyin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                <FaGithub />
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer