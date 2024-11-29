import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Header from './components/Header';
import OtherHeader from './components/OtherHeader';
import Form from './components/Form';
import { Link } from 'react-router-dom';
import HomeHeader from "./components/HomeHeader";
const ContactPage = () => {
  return (
    <>
     <Header className='lg:hidden'>
      <OtherHeader text="Let's talk" />
    </Header>
    <Header className='hidden lg:block '>
      <HomeHeader/>
    </Header>
    
    <div className="md:mt-28 ">
      <div className=" lg:flex text-brown w-[90%] mx-auto flex flex-col mt-[4rem] ">
        <Form/>
        <div className=" lg:w-[40%] lg:mx-auto mt-6 border-t border-brown pt-4 flex items-center justify-between">
          <p className="text-brown">Or reach out to me directly:</p>
          <div className="flex items-center justify-between w-[40%]">
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
          </div>
      </div>

      </div>
    </div>
    </>
  );
};

export default ContactPage;
