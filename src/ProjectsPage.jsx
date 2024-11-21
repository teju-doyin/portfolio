import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import audiophile from "../public/audiophile-mobile.png";
import { IoIosLink } from "react-icons/io";

const ProjectsPage = () => {
  return (
    <div className='  mt-[4rem] w-[90%] mx-auto'>
      <div className="flex ">
        <Link to='/'>
          <FaArrowLeftLong size={30} className='bg-pink p-2 cursor-pointer mb-7 rounded-full text-white'/>
        </Link>
        <h2 className="font-semibold text-[1.3rem] flex justify-center w-[90%] text-brown">Projects</h2>
      </div>
      <section className="">
        <div className="border border-pink p-2 rounded-2xl bg-offWhite">
          <img
            src={audiophile}
            alt="Project Thumbnail"
            className="w-full rounded-2xl  "
          />
          <div className=" b-white mt-5 text-blackish">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold ">
                Education Website
              </h3>
              <Link to='https://x.com/tj_doyin'
                target="_blank"
                >
                <IoIosLink  className="text-pink  "/>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="border border-pink rounded-xl px-3 text-brown bg-offWhite ">React</span>
              <span className="border border-pink rounded-xl px-3 text-brown bg-offWhite ">Redux</span>
              <span className="border border-pink rounded-xl px-3 text-brown bg-offWhite ">Tailwind CSS</span>
              <span className="border border-pink rounded-xl px-3 text-brown bg-offWhite ">Javascript</span>
            </div>
            <p className="text-justify mt-2">
              A modern education platform that connects students with
              educators, featuring interactive tools and resources.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default ProjectsPage