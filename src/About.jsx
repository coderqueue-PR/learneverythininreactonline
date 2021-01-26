import React from 'react'
import hero from '../src/images/heroo.svg'
import Common from './Common';

const About = () => {
    return (
        <>
         <Common name = "Welcome to about page"
          imgsrc={hero} visit="/contact"
           btname="Contact Now" />
        </>
    )
}

export default About;