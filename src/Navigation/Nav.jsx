import React from 'react'
import Logo from './Logo'
const Nav = () => {
  return (
    <div className='flex justify-center items-center '>
      <Logo/>
      <ul className=' py-5 px-10 list-unstyled text-white flex gap-10 font-semibold text-lg '> 
        <li className='cursor-pointer hover:text-gray-500 hover:border-b-2'>Home</li>
        <li className='cursor-pointer hover:text-gray-500 hover:border-b-2'>About me</li>
        <li className='cursor-pointer hover:text-gray-500 hover:border-b-2'>Academic</li>
        <li className='cursor-pointer hover:text-gray-500 hover:border-b-2'>Experience</li>
        <li className='cursor-pointer hover:text-gray-500 hover:border-b-2'>Project</li>
      </ul>
    </div>
  )
}

export default Nav