import React from 'react'
import Nav from './Nav'
const Header = () => {
  return (
    <div className='py-3 md:py-4 px-4 md:px-10 lg:px-20 bg-gray-900/95 backdrop-blur-md w-full z-50 fixed top-0 left-0 shadow-lg border-b border-purple-500/20'>
      <Nav/>
    </div>
  )
}

export default Header
