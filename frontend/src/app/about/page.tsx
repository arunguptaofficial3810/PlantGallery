import AboutDescription from '@/Components/AboutDescription/page'
// import AboutJourney from '@/Components/AboutJourney/page'
import AboutRecognition from '@/Components/AboutRecognition/page'
import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <AboutDescription />
      <AboutRecognition />
      {/* <AboutJourney /> */}
    </div>
  )
}

export default About