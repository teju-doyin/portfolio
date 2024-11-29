import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projects from "../../public/projects.json"
const Projects = () => {
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
  const isTablet = useMediaQuery('(min-width: 640px)');
  const isLaptop = useMediaQuery('(min-width: 768px)');
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex justify-center mb-5">
        <div className="relative oval-container font-semibold">
          Recent Projects
          <span className="third-oval"></span>
        </div>
      </div>

      <p className="text-justify text-blackish mb-5 lg:text-center lg:w-[60%] lg:mx-auto lg:mb-12">
        Here’s a glimpse at what I’ve been building! From interactive UIs to
        responsive web apps, these projects show my love for all things
        frontend.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[75%] lg:w-full mx-auto  mb-5"
      >
        <CarouselContent>
        {projects.slice(0,3).map((project,index)=>(
            <CarouselItem key={index} className="lg:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="border border-pink rounded-lg bg-white ">
                  <CardContent className="flex text-blackish relative flex-col items-center justify-center p4 bg-white rounded-lg">
                    <img
                      // src={isTablet?  (isLaptop? project.image.desktopThumbnail: project.image.tabletThumbnail): project.image.mobileThumbnail}
                      src={isLaptop? project.images.desktopThumbnail: project.images.thumbnail}
                      alt={project.title}
                      className="w-full h- object-contain rounded-lg lg:rounded-t-lg "
                    />

                    <div className="text-center absolute lg:mt-4 lg:static lg:border-none border border-pink bg-white text-blackish z-10 py-1 px-1.5  bottom-0 rounded-b-md rounded-t-[1.5rem] ">
                      <Link target="_blank" className="text-lg font-bold text-pink-600 border-b-[1px] pb-[2px] rounded- border-b-pink" to={project.link}>
                        {project.title}
                      </Link>
                      <p className="text-sm text-justify lg:text-center  lg:text-base  mt-1">
                        {project.shortDescription}
                      </p>
                    </div>
                   
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="carousal-arrow" />
        <CarouselNext className="carousal-arrow" />
      </Carousel>

      <p className="flex justify-center">
        <Link
          to="/ProjectsPage"
          className="text-center text-pink font-semibold border-b-2 border-b-pink"
        >
          See more
        </Link>
      </p>
    </section>
  );
};

export default Projects;
