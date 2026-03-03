import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='header'>
      <div><h1 className='link'>Logo</h1></div>
      <div>
        <ul>
          <li> <Link to='/' className='link'>Home</Link></li>
          <li>  <Link to='/about'className='link' >About</Link></li>
          <li>  <Link to='/login' className='link'>Login</Link></li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar