import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import About from './About'
import { Routes,Route, Link } from 'react-router'
import Navbar from './Navbar'
function App() {

  return (
    <>
      <div>

        <h1> React Router</h1>
      <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
<Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>

  )
}

export default App
