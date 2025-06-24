import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <main className='
      relative 
      min-h-screen 
      w-screen 
      overflow-hidden 
      '>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
// bg-zinc-600