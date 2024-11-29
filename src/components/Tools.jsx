import React from 'react';
import { VscVscode } from "react-icons/vsc";
import { FaGithub, FaReact, FaFigma } from "react-icons/fa";
import { SiRedux, SiJest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const Tools = () => {
  return (
    <section className="text-blackish mb-16 lg:mb-32 lg:flex lg:gap-12">
      <div className='lg:w-[40%]'>
        <h4 className="font-semibold text-pink mb-2 text-center lg:text-left lg:text-[1.25rem]">Tools I use</h4>
        <p className='text-justify mb-3 lg:text-[1.2rem] '>Here are some awesome tools I use to make development and problem solving easier and faster.</p>
      </div>
      <div>
        <ul className="grid grid-cols-3  lg:grid-cols-4 gap-3 lg:gap-8 lg:text-[1.15rem]">
          <li className="flex items-center">
            <VscVscode className="mr-2 text-lavender " size={25} /> VS Code
          </li>
          <li className="flex items-center">
            <FaReact className="mr-2 text-lavender" size={25} /> React
          </li>
          <li className="flex items-center">
            <IoLogoJavascript className="mr-2 text-lavender" size={25} /> JavaScript
          </li>
          <li className="flex items-center">
            <FaGithub className="mr-2 text-lavender" size={25} /> Github
          </li>
          <li className="flex items-center">
            <SiRedux className="mr-2 text-lavender" size={25} /> Redux
          </li>
          <li className="flex items-center">
            <RiTailwindCssFill className="mr-2 text-lavender" size={25} /> Tailwind CSS
          </li>
          <li className="flex items-center">
            <FaFigma className="mr-2 text-lavender" size={25} /> Figma
          </li>
          <li className="flex items-center">
            <SiJest className="mr-2 text-lavender" size={25} /> Jest
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
