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
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex justify-center mb-5">
        <div className="relative oval-container font-semibold">
          Recent Projects
          <span className="third-oval"></span>
        </div>
      </div>

      <p className="text-justify text-blackish mb-5">
        Here’s a glimpse at what I’ve been building! From interactive UIs to
        responsive web apps, these projects show my love for all things
        frontend.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[75%] mx-auto max-w-sm mb-5"
      >
        <CarouselContent>
        {projects.slice(0,3).map((project,index)=>(
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="border border-pink rounded-lg bg-white ">
                  <CardContent className="flex text-blackish relative flex-col items-center justify-center p4 bg-white rounded-lg">
                    <img
                      src={project.images.thumbnail}
                      alt="Project Thumbnail"
                      className="w-full h- object-contain rounded-md "
                    />

                    <div className="text-center absolute border border-pink bg-white text-blackish z-10 py-1 px-1.5  bottom-0 rounded-b-md rounded-t-[1.5rem] ">
                      <Link className="text-lg font-bold text-pink-600 border rounded-sm border-b-pink" to={project.link}>
                        {project.title}
                      </Link>
                      <p className="text-sm text-justify  mt-1">
                        {project.shortDescription}
                      </p>
                    </div>
                   
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border border-pink text-pink hover:bg-pink hover:text-white" />
        <CarouselNext className="border border-pink text-pink hover:bg-pink hover:text-white" />
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
