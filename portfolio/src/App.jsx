import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import SecondPage from './components/SecondPage'
import Home from './components/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/second-page" element={<SecondPage/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App

