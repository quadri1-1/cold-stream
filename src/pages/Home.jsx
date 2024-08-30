import React from 'react'
import Homebanner from '../Home components/Homebanner'
import Services from "../Home components/Services"
import Location from '../Home components/Location'
import Needfinancing from '../Home components/Needfinancing'
import Directions from '../Home components/Directions'

const Home = () => {
  return (
    <div>
      <Homebanner />
      <Services />
      <Location />
      
    </div>
  )
}

export default Home