import React from 'react'
import FlightSearch from '../components/FlightSearch'
import Destinations from '../components/Destinations'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonal'
import Footer from '../components/layout/Footer'
import Hero from "../components/layout/Hero"
const Home = () => {
  return (
     <>
      <div className="space-y-10">
        <Hero />

        <div id="flights">
          <FlightSearch />
        </div>

        <Destinations />

        <WhyChooseUs />

        <Testimonials />
        <footer id="contact">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Home
