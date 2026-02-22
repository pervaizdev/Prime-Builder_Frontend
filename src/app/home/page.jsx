import React from 'react'
import BackgroundVideo from '@/Component/BackgroundVideo'
import Cards from '@/Component/Common/Cards/homecard'
import HeroSection from '@/Component/HeroSection/HeroSection'
import cardData from '@/data/cardData'
import WeAre from '@/Component/Whoweare/weare'
import Services from '@/Component/OurServices/servicespage'
import DifferentSection from '@/Component/DifferentSection/DifferentSection'
import TestimonialsSection from '@/Component/Testimonials/Testimonials'
import ClientsSwiper from '@/Component/Swiper/ClientsSwiper'
import Team from '@/Component/Team/Team'
import CallBackSection from '@/Component/CallBackSection/callbacksection'
import FooterSection from '@/Component/Footer/footer'

export default function HomePage() {
  return (
    <div className="relative">

      <BackgroundVideo src="/Videos/Home.mp4" />
      <HeroSection />
      <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <WeAre />
      <Services />
      <DifferentSection />
      <TestimonialsSection />
      <ClientsSwiper />
      <Team />
      <CallBackSection />
      <FooterSection />
      
    </div>
  )
}
