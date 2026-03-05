import React from 'react'
import { Link,Outlet } from 'react-router'
const Services = () => {
  return (
    <section> <h1>Services offered</h1>
    
    
    <ul style={{listStyleType:'none'}}>
        <li><Link to='/services/print' className='link'>Print</Link></li>
        <li><Link to='/services/run'className='link'>Run a business</Link></li>
        <li><Link to='/services/auditing' className='link'>Auditing</Link></li>
        </ul>
        <Outlet/>
        
        </section>
  )
}

export default Services
