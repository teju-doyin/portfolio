import React, {useState} from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    const [finished, setFinished] = useState(false);

    const [text] = useTypewriter({
        words: ['Hello','Hola', '안녕하세요','Bonjour','こんにちは','Ciao', '你好', 'Hello'],
        // words: ['Hello','Hola','Hello' ],
        loop: 1,
        typeSpeed: 100,
        deleteSpeed: 80,
        onLoopDone: ()=>setFinished(true)
    })
  return (
    <div className='text-[1.1rem] text-blackish mt-[4rem] rounded-bl-lg'>
        <h1 className='text-[1.3rem] text-pink'>
            {/* { ' '} */}
            <span className=' font-semibold'>{text}</span>
            <span className=''>
               {!finished && <Cursor />}
            </span>

        </h1>
        <p className=' text-justify'> I'm Teju, a frontend developer crafting <span className='text-brown font-semibold'>delightful </span> <span className=" text-pink font-semibold">web experiences</span>  one pixel at a time. 
        Dive in to see my journey, projects, and what I've been up to!
        </p>
        <button className='my-9 bg-pink text-offWhite px-3 py-2 rounded-sm'> My Resume <MdOutlineFileDownload style={{color:'white', display:"inline"}} />
        </button>
    </div>
  )
}

export default Hero