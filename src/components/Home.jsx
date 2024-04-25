import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Portfolio from "../Asset/Portfolio.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
    name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    > 
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-ful px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Hello there! I'm Younus Ansari a passionate full-stack developer with a keen eye for crafting dynamic and user-friendly web experiences.
                I thrive on the challenges of bringing creative
                ideas to life through code, and I'm dedicated to delivering
                high-quality solutions that exceed expectations.
                </p>

                <div>
                    <Link 
                    to="Project"
                    smooth duration={500}
                    className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 '> Projects
                        <span className='group-hover:rotate-90 duration-300'>
                        <FaLongArrowAltRight className='ml-2'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={Portfolio} 
                alt="my portfolio"
                className='mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home