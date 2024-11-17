import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='w-[90%] mx-auto pt-2 pb-1'>
        <div className="">
            <div className="flex text-pink justify-between items-center">
                <p className='text-brown font-medium text-[.8rem]'> 
                    © 2024 Teju. All rights reserved.
                </p>
                <FaLinkedin />
                <RiTwitterXFill />
                <FaGithub />
            </div>
        </div>
    </footer>
  )
}

export default Footer