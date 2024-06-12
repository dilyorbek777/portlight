import CE from '@/components/site/ce'
import DSection from '@/components/site/dSection'
import Hero from '@/components/site/hero'
import Latest from '@/components/site/latest'
import Wwd from '@/components/site/wwd'
import React from 'react'

export default function HomePage() {
  return (
    <div >
      <Hero />
      <CE />
      <Wwd />
      <DSection />
      <Latest />
    </div>
  )
}
