import React from 'react';
import profile from '../../public/profile.png';
import Tools from './Tools';
// import '..d'
const AboutMe = () => {
  return (
    <section className='w-[90%] mx-auto '>
      <div className='text-5xl font-bold opacity-10 text-lavender relative top-6 left-28 lg:text-8xl tracking-[.4rem]'>About me</div>
      <div className="lg:flex lg:justify-between lg:mb-24">
        <div className="flex flex-col justify-center items-center gap-5 lg:flex-col-reverse">
            <div className=" z-10 w-[90%] flex justify-center"><img src={profile} alt="Profile" width={120} className='rounded-full lg:w-[90%]  ' /></div>
            <div className="lg:hidden">
                <div className="relative oval-container font-semibold ">
                  About me
                  <span className="third-oval"></span>
                </div>
            </div>
        </div>
        <div className="text-justify py-5 text-blackish lg:w-[40%] ">
          <h1 className='tracking-[.4rem] text-[1.6rem] font-semibold text-pink mb-3 hidden lg:block'>About Me</h1>
            <div className="lg:text-[1.25rem]">
              <p className=''>
              I’m a Junior Frontend Developer passionate about bringing ideas to life with clean, responsive, and interactive web designs.
              I'm particularly skilled in <span className="text-brown font-medium">React</span> while I have foundational experience with <span className="text-brown font-medium">Redux</span>, <span className="text-brown font-medium">Next.js</span>, and <span className="text-brown font-medium">TypeScript</span>.
              </p>
              <p>
              {/* With a strong background in computer science and an internship that sharpened my skills, I've gained valuable experience building real-world applications that prioritize both aesthetics and user experience. */}
              {/* I thrive in collaborative environments, leveraging strong communication and teamwork skills to contribute meaningfully to team efforts and ensure project success. At the same time, I am equally adept at working independently, taking initiative, and driving tasks to completion with attention to detail and efficiency. */}
              </p>
              <p className='mt-2'>
                  When I'm not coding, you might find me exploring new design trends, learning a language, or savoring a perfect cup of coffee.
              </p>
              <p>Let’s create something amazing together!</p>
            </div>
        </div>
      </div>
      <Tools/>
    </section>
  );
};

export default AboutMe;
