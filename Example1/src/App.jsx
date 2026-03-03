import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import About from './About'
import { Routes, Route, Link } from 'react-router'
import Navbar from './Navbar'
import Tutorials from './Tutorials'
import ErrorPage from './ErrorPage'
import Javascript from './Javascript'
function App() {

  return (
    <>
      <div>

        <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />}>
          <Route path="javascript" element={<Javascript />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<ErrorPage />}> </Route>
      </Routes>
            </div>

    </>

  )
}

export default App
