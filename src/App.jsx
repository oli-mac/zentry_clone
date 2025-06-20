import React from 'react'
import Hero from './components/Hero.jsx'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <Hero />
      <section className='z0 min-h-screen bg-blue-500' />
    </main>
  )
}

export default App