import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tecnologies from './pages/Tecnologies'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tecnologies' element={<Tecnologies />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
