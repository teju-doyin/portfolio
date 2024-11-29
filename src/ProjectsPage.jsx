import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoIosLink } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";
import Header from './components/Header';
import OtherHeader from './components/OtherHeader';
import HomeHeader from './components/HomeHeader';

const ProjectsPage = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        setTimeout(() => {
          setLoading(false);
          setProjects(data);
        }, 2000);
        console.log(data.length);
      } catch (error) {
        console.error("Error fetching desserts:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }, [query]);
  
    return matches;
  }
  // const isTablet = useMediaQuery('(min-width: 640px)');
  const isLaptop = useMediaQuery('(min-width: 768px)');

  if (loading) {
    return (
      <section>
        <Header className='lg:hidden'>
          <OtherHeader text="Projects" />
        </Header>
        <Header className='hidden lg:block '>
          <HomeHeader/>
        </Header>
        <div className=' w-[90%] mt-[5rem] sm:mt-[7rem] mx-auto sm:grid md:grid-cols-2 lg:grid-cols-3 gap-7   '>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="mb-8 mt-4 ">
              <Skeleton className="bg-[#f8e2f2] w-full h-80 rounded-lg mb-12" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
    <Header className='lg:hidden'>
      <OtherHeader text="Projects" />
    </Header>
    <Header className='hidden lg:block '>
      <HomeHeader/>
    </Header>
    <div className='  mt-[5rem] sm:mt-[7rem] w-[90%] mx-auto'>
      
      <section className="sm:grid md:grid-cols-2  lg:grid-cols-3 gap-7  lg:mt-5">
        {projects.map((project)=> <div key={project.id} className="border mb-8 border-pink p-2 rounded-2xl bg-offWhite">
          <img
            src={isLaptop? project.images.desktop: project.images.mobile}
            alt={project.title}
            className="w-full rounded-2xl  "
          />
          <div className=" b-white mt-5 text-blackish">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold ">
                {project.title}
              </h3>
              <Link to={project.link}
                target="_blank"
                >
                <IoIosLink  className="text-pink  "/>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech,index)=> <span key={index} className="tools ">{tech}</span>)}
            </div>
            <p className="text-justify mt-2">
              {project.fullDetails}
            </p>
          </div>
        </div>)}
        
      </section>
    </div>
    </>
  )
}

export default ProjectsPage