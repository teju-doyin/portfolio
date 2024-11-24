import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const OtherHeader = ({text}) => {
  return (
    <div className="flex items-center w-[90%]">
        <Link to='/'>
          <FaArrowLeftLong size={30} className='bg-pink  p-2 cursor-pointer rounded-full text-white'/>
        </Link>
        <h2 className="font-semibold text-[1.3rem] flex justify-center w-[90%] text-brown">{text}</h2>
    </div>
  )
}

export default OtherHeader