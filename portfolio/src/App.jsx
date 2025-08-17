import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import AboutMe from './components/AboutMe.jsx'
import Home from './components/Home'
import Projects from './components/projects.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App

