import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center items-center '>
      <ul className=' py-5 px-10 list-unstyled text-white flex gap-10 bg-black-500/30 backdrop-blur-md border border-white/20 rounded-4xl font-semibold text-lg '> 
        <li className='cursor-pointer hover:text-gray-500'>Home</li>
        <li className='cursor-pointer hover:text-gray-500'>About me</li>
        <li className='cursor-pointer hover:text-gray-500'>Academic</li>
        <li className='cursor-pointer hover:text-gray-500'>Experience</li>
        <li className='cursor-pointer hover:text-gray-500'>Project</li>
      </ul>
    </div>
  )
}

export default Nav
