import React from 'react';
import profile from '../../public/profile.png';
import Tools from './Tools';
// import '..d'
const AboutMe = () => {
  return (
    <section className='w-[90%] mx-auto '>
      <div className='text-5xl font-bold opacity-5 text-lavender relative top-6 left-28  tracking-[.4rem]'>About me</div>
      <div className="">
        <div className="flex flex-col justify-center items-center gap-5">
            <div className=" z-10  "><img src={profile} alt="Profile" width={120} className='rounded-full ' /></div>
            <div className="">
                <div className="relative oval-container font-semibold">
                  About me
                  <span className="third-oval"></span>
                </div>
            </div>
        </div>
        <div className="text-justify py-5 text-blackish">
            <p>
            I’m a junior frontend developer passionate about bringing ideas to life with clean, responsive, and interactive web designs. 
            I'm particularly skilled in React while I have foundational experience with Redux, Next.js, and TypeScript.
            </p>
            <p>
            {/* With a strong background in computer science and an internship that sharpened my skills, I've gained valuable experience building real-world applications that prioritize both aesthetics and user experience. */}
            {/* I thrive in collaborative environments, leveraging strong communication and teamwork skills to contribute meaningfully to team efforts and ensure project success. At the same time, I am equally adept at working independently, taking initiative, and driving tasks to completion with attention to detail and efficiency. */}
            </p>
            <p>
                When I'm not coding, you might find me exploring new design trends, learning a new language, or savoring a perfect cup of coffee.
            </p>
            <p>Let’s create something amazing together!</p>
        </div>
      </div>
      <Tools/>
    </section>
  );
};

export default AboutMe;
