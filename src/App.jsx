import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Aboutme from './Aboutme/Aboutme'
import Edu from './Edu/Edu'
import Showcase from './Showcase/Showcase'
import Experience from './Experience/Experience'
import AnimatedBackground from './assets/Background/AnimatedBackground'

const App = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header/>
        <Body/>
        <Aboutme/>
        <Edu/>
        <Showcase/>
        <Experience/>
      </div>
    </div>
  )
}

export default App
