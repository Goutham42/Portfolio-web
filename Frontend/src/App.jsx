import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
