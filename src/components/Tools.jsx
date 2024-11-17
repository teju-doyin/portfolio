import React from 'react';
import { VscVscode } from "react-icons/vsc";
import { FaGithub, FaReact, FaFigma } from "react-icons/fa";
import { SiRedux, SiJest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const Tools = () => {
  return (
    <section className="text-blackish mb-16">
      <div>
        <h4 className="font-semibold text-pink mb-2 text-center">Tools I use</h4>
        <p className='text-justify mb-3'>Here are some awesome tools I use to make development and problem solving easier and faster.</p>
      </div>
      <div>
        <ul className="grid grid-cols-3  md:grid-cols-4 gap-3">
          <li className="flex items-center">
            <VscVscode className="mr-2 text-lavender" /> VS Code
          </li>
          <li className="flex items-center">
            <FaReact className="mr-2 text-lavender" /> React
          </li>
          <li className="flex items-center">
            <IoLogoJavascript className="mr-2 text-lavender" /> JavaScript
          </li>
          <li className="flex items-center">
            <FaGithub className="mr-2 text-lavender" /> Github
          </li>
          <li className="flex items-center">
            <SiRedux className="mr-2 text-lavender" /> Redux
          </li>
          <li className="flex items-center">
            <RiTailwindCssFill className="mr-2 text-lavender" /> Tailwind CSS
          </li>
          <li className="flex items-center">
            <FaFigma className="mr-2 text-lavender" /> Figma
          </li>
          <li className="flex items-center">
            <SiJest className="mr-2 text-lavender" /> Jest
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
