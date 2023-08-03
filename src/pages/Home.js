import React from 'react'

import Hero from '../components/Hero'
import Scroll from '../components/Scroll'
import WhoWeAre from '../components/WhoWeAre'
import Character from '../components/Character'
import WhyJoin from '../components/WhyJoin'
import Eye from '../pages/Eye'
import Team from '../components/Team'
import Faq from '../components/Faq'
import Footer from '../components/Footer'



function Home() {
  return (
    <div className=''>
   
        <Hero/>
        <Scroll/>
        <WhoWeAre/>
        <Character />
 <WhyJoin/>

 <Team/>
 <Faq/>
 <Footer/>


       
        
    </div>
  )
}

export default Home