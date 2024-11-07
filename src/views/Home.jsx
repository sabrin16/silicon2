import React from 'react'

import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import Recieve from '../components/Recieve'
import MakeMoney from '../components/MakeMoney'
import CarouselSection from '../components/CarouselSection'
import Features from '../components/Features'
import Logos from '../components/Logos'
import Showcase from '../components/Showcase'
import Nav from '../components/Nav'
import MobileButton from '../components/MobileButton'
import Header from '../components/Header'
import SocialMediaLinks from '../components/SocialMediaLinks'

const Home = () => {
  return (
    <>
       <SocialMediaLinks />
       <Header />
       <MobileButton />
       <Nav />
       <Showcase />
       <Logos />
       <Features />
       <CarouselSection />
       <MakeMoney />
       <Recieve />
       <Testimonials />
       <Faq />
       <Subscribe />
       <Footer />
    </>
  )
}

export default Home