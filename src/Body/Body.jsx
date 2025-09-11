import React from 'react'
import Left from  './Left'
import Right from './Right'
const Body = () => {
  return (
    <div className='grid grid-cols-2 gap-20 justify-center items-center h-[100vh]'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Body
