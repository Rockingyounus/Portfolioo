import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 py-6 mt-0 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/nbvvzwnb" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name'
                    className='p-3 mb-4 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none'/>

                    <input type="email" name="email" placeholder='Enter your email'
                    className='p-3 mb-4 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none'/>

                    <textarea name='message' rows="5" placeholder='Enter your message' className='p-3 mb-4 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none'></textarea>

                     <button type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                     px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
