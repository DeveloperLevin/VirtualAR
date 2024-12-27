import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/WorkFlow'
import Pricing from './components/Pricing'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
      </div>
    </>
   )
}