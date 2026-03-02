import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import { Routes,Route } from 'react-router'
function App() {

  return (
    <>
      <div>

        <h1> React Router</h1>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

      </Routes>
    </>

  )
}

export default App
