import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import About from './components/about'
import Marquee from './components/Marquee'
import Eyess from './components/Eyess'
import Featured from './components/featured'
import About2 from './components/about2'
import Cards from './components/Cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-[#F1F1F1]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyess />
      <Featured />
      <About2 />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
