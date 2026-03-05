import { PersonStandingIcon } from 'lucide-react'
import React from 'react'

import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <nav>

    <NavLink to='/'><PersonStandingIcon/>
</NavLink>


    <ul className='links-container'>
        <li><NavLink to='/about' className='link'> About Me</NavLink></li>
        <li><NavLink to='/portfolio'className='link' > Portfolio</NavLink></li>
        <li><NavLink to='/services' className='link'> Services</NavLink></li>
        <li><NavLink to='/blog' className='link'> Blog </NavLink></li>
        
    </ul>
    <NavLink to='/book'> Book me</NavLink>
    </nav>
  )
}

export default Navbar