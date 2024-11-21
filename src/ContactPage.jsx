import React from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className=" ">
      <div className=" text-brown w-[90%] mx-auto bg-[#f8e2f2 flex flex-col mt-[4rem] ">
      <div className="flex ">
        <Link to='/'>
          <FaArrowLeftLong size={30} className='bg-pink p-2 cursor-pointer mb-7 rounded-full text-white'/>
        </Link>
        <h2 className="font-semibold text-[1.3rem] flex justify-center w-[90%] text-brown">Let's talk</h2>
      </div>
        <div className=" rounded-t-3xl pt-4">
          <div className="mb-8 text-center ">
            <p>Have a project in mind? Write me so we can make something amazing.</p>
          </div>
          <form className="mb-5 flex flex-col ">
            <input
              type="name"
              placeholder="Name"
              className="w-full placeholder:text-brown placeholder:opacity-60 mb-3 border border-brown text-brown outline-none rounded-sm p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full placeholder:text-brown placeholder:opacity-60 mb-3 border border-brown text-brown outline-none rounded-sm p-2"
            />
            <textarea
              placeholder="Your message here"
              className="w-full outline-none placeholder:text-brown placeholder:opacity-60 text-brown border border-brown resize-none rounded-sm pt-2 pl-2 mb-3 flex-grow"
              rows={3}
            ></textarea>
            <button className="ml-auto mt-5 block bg-pink text-white py-1.5 px-7 rounded-sm">
              Send
            </button>
          </form>
        </div>
        <div className="mt-6 border-t border-brown pt-4 flex items-center justify-between">
          <p className="text-brown">Or reach out to me directly:</p>
          <div className="flex items-center justify-between w-[40%]">
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
          </div>
      </div>

      </div>
    </div>
  );
};

export default ContactPage;
