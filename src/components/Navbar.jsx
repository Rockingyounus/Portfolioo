import React, { useState } from 'react'
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {

  const [nav, setNav] = useState(false);
  
  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Projects'
    },
    {
      id: 4,
      link: 'Skills'
    },
    {
      id: 5,
      link: 'Contacts'
    },
    
  ]
  return (
    <div className='flex justify-between items-start w-full h-20 px-4 text-white bg-black fixed'>

        <div>
            <h1 className='text-5xl py-4 font-signature ml-2'>Sultan</h1>
        </div>

        <ul className=' py-6 hidden md:flex '>

          {links.map(({ id,link }) => (
             <li 
             key={id} 
             className='px-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200'>
              <Link to={link} smooth duration={200}>{link}</Link>

             </li>
          ))}
         
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 py-6 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>

        {nav && (
        <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map(({ id,link }) => (
        <li 
        key={id} 
        className='px-4 cursor-pointer capitalize font-medium py-6 text-4xl
       text-gray-500 hover:scale-105 duration-200'>
        <Link
        onClick={() => setNav(!nav)}
        to={link} smooth duration={200}>{link}</Link>
        </li>
        ))}

       </ul>
      )} 
    </div>
  )
}

export default Navbar