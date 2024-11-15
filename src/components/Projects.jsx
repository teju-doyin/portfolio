import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
  
const Projects = () => {
  return (
    <section className='w-[90%] mx-auto '>
        <div className="flex justify-center mb-5">
            <div className="relative oval-container font-semibold">
                Recent Projects
                <span className="third-oval"></span>
            </div>
        </div>
        <p className='text-justify text-blackish mb-5'>Here’s a glimpse at what I’ve been building! From interactive UIs to responsive web apps, these projects show my love for all things frontend. </p>
        <Carousel
            opts={{
            align: "start",
            }}
            className="w-[75%] mx-auto max-w-sm mb-5"
        >
            <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                    <Card className='border border-pink'>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className='border border-pink text-pink hover:bg-pink hover:text-white' />
            <CarouselNext className='border border-pink text-pink hover:bg-pink hover:text-white' />
        </Carousel>
        <p  className='flex justify-center'><a href="#" className='text-center text-pink font-semibold border-b-2 mx-auto  border-b-pink ' >See more</a></p>
    </section>
  )
}

export default Projects