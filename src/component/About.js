import React from 'react'
import AboutHead from './AboutHead'
import AboutContent from './Aboutcontent'

function About() {
    return(
       <div className="w-full flex justify-center">
           <div className="container text-center">
               <AboutHead />
               <AboutContent />
           </div>
       </div>    
    )
}

export default About