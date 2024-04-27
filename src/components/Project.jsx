import React from 'react';
import Crud from "../Asset/portfolio/Crud.png";
import Crud2 from "../Asset/portfolio/Crud2.png";
import Weather from "../Asset/portfolio/Weather.png";
import Weather2 from "../Asset/portfolio/Weather2.png";
import Port2 from "../Asset/portfolio/Port2.png";
import Port from "../Asset/portfolio/Port.png";


const Project = () => {

  const projects = [
    {
      id: 1,
      src: Crud
    },
    {
      id: 2,
      src: Crud2
    },
    {
      id: 3,
      src: Weather
    },
    {
      id: 4,
      src: Weather2
    },
    {
      id: 5,
      src: Port2
    },
    {
      id: 6,
      src: Port
    },
    
  ]
  return (
    <div
      name="projects"
      className='bg-gradient-to-b from-black to-gray-800 w-full h-ful text-white md:h-screen mt-0' // Added mt-24 for margin-top
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
            
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({id, src}) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project;
