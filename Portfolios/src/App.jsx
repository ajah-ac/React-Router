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
import Blogpost from './Blogpost'
import BookCall from './BookCall'
import BookingForm from './BookingForm'
import ThankYou from './ThankYou'

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
<Route path='/portfolio/:id' element={<Portfolio/>}/>
<Route path='/services' element={<Services/>}>
<Route index element={<h1>Services Offered</h1>}/>
<Route path='print' element={<h1>This is the page about the printing service </h1>}/>
<Route path='run' element={<h1>This is the page about the running a business service </h1>}/>
<Route path='auditing' element={<h1>This is the page about the auditing service </h1>}/>
</Route>
<Route path='/blog' element={<Blog/>}/>
<Route path='/thanks' element={<ThankYou/>}/>
<Route path='/blog/:id' element={<Blogpost/>}/>

<Route path='/book' element={<BookCall/>}/>
<Route path='/bookform' element={<BookingForm/>}/>




        </Routes>
       </div>
    </>
  )
}

export default App
