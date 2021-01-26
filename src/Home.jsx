import React from 'react'
import hero from '../src/images/abouthero.svg'
import Common from './Common';

const Home = () => {
    return (
        <>
         <Common name = "Grow your bussiness with"
          imgsrc={hero} 
          visit="/services"
           btname="Get Started" />
        </>
    )
}

export default Home;