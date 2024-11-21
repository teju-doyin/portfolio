import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import audiophile from "../../public/audiophile-mobile.png";

const Projects = () => {
  return (
    <section className="w-[90%] mx-auto">
      {/* Section Header */}
      <div className="flex justify-center mb-5">
        <div className="relative oval-container font-semibold">
          Recent Projects
          <span className="third-oval"></span>
        </div>
      </div>

      {/* Section Description */}
      <p className="text-justify text-blackish mb-5">
        Here’s a glimpse at what I’ve been building! From interactive UIs to
        responsive web apps, these projects show my love for all things
        frontend.
      </p>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[75%] mx-auto max-w-sm mb-5"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="border border-pink rounded-lg shadow-lg bg-white ">
                  <CardContent className="flex text-blackish relative flex-col items-center justify-center p4 bg-white rounded-lg">
                    <img
                      src={audiophile}
                      alt="Project Thumbnail"
                      className="w-full h- object-contain rounded-md "
                    />

                    <div className="text-center absolute z-10 bg-white bottom-0 rounded-b-md rounded-t-[2rem] ">
                      <h3 className="text-lg font-bold text-pink-600">
                        Education Website
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        A modern education platform that connects students with
                        educators, featuring interactive tools and resources.
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
