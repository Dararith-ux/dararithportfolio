import { useState } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Aboutme from './Aboutme/Aboutme'
import Edu from './Edu/Edu'
import Showcase from './Showcase/Showcase'
import Experience from './Experience/Experience'
import AnimatedBackground from './assets/Background/AnimatedBackground'
import Landing from './Landing/Landing'

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLandingComplete = () => {
    setShowLanding(false);
    // Small delay to ensure landing is fully gone before showing content
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="relative">
      {/* Landing Page */}
      {showLanding && (
        <Landing onComplete={handleLandingComplete} />
      )}

      {/* Main Content - Only render after landing completes */}
      {showContent && (
        <>
          <AnimatedBackground />
          <div className="relative z-10">
            <Header/>
            <Body/>
            <Aboutme/>
            <Edu/>
            <Showcase/>
            <Experience/>
          </div>
        </>
      )}
    </div>
  )
}

export default App
