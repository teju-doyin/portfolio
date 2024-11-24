import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Header from './components/Header';
import OtherHeader from './components/OtherHeader';
import Form from './components/Form';

const ContactPage = () => {
  return (
    <>
    <Header>
      <OtherHeader text="Let's talk" />
    </Header>
    <div className=" ">
      <div className=" text-brown w-[90%] mx-auto bg-[#f8e2f2 flex flex-col mt-[4rem] ">
        <Form/>
        <div className="mt-6 border-t border-brown pt-4 flex items-center justify-between">
          <p className="text-brown">Or reach out to me directly:</p>
          <div className="flex items-center justify-between w-[40%]">
            <a
              href="mailto:tj.doyin@gmail.com"
              className="text-pink flex items-center gap-2 hover:underline"
            >
              <MdOutlineMarkEmailUnread size={20} />
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
    </>
  );
};

export default ContactPage;
