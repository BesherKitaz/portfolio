import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

import AboutMe from './components/AboutMe.jsx'
import Home from './components/Home'
import Projects from './components/projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/experience.jsx'
import Contact from './components/contact.jsx'

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>     
    </>
  )
}

export default App

