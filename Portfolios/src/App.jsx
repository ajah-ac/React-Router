import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>hello</h1>
        <Routes> 
<Route path='/' element={<h1>Heellow 2</h1>}/>
        </Routes>
       </div>
    </>
  )
}

export default App
