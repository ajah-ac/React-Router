import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Blog from './Blog'
import Services from './Services'
import Portfolio from './Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes> 
<Route path='/' element={<h1>Welcome to my porfolio page</h1>}/>
<Route path='/about' element={<AboutMe/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/book' element={<h1>Hello <br/>Contact me on:janedoe@gmail.com</h1>}/>





        </Routes>
       </div>
    </>
  )
}

export default App
