import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="">
      <BrowserRouter>
         <Navbar />
         <Routes>
           <Route index element={<Home />} />
         </Routes>
      </BrowserRouter>
      <Hero />
    </div>
  )
}

export default App
