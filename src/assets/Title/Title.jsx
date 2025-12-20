import Lottie from 'lottie-react'
import React from 'react'

const Title = ({title}) => {
  return (
    <div >
      <h1 className='text-5xl bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent font-bold text-center'>{title}</h1>
    </div>
  )
}

export default Title
