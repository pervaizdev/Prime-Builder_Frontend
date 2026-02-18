import React from 'react'
import BackgroundVideo from '@/Component/BackgroundVideo'

import HeroSection from '@/Component/HeroSection'
import Navbar from '@/Component/Navbar/navbar'

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
 
      <BackgroundVideo src="/Videos/Home.mp4" />
      <HeroSection />
    </div>
  )
}
