import React from 'react'
import Left from  './Left'
import Right from './Right'
const Body = () => {
  return (
    <div id="home" className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 justify-center items-center min-h-[100vh] px-6 md:px-10 lg:px-16 pt-20 lg:pt-0'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Body
