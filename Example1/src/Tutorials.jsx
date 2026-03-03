import React from 'react'
import { Link, Outlet } from 'react-router'
import './App.css'
const Tutorials = () => {
    return (
        <div>
            <h1> Tutorials</h1>
            <ul><li>
                <Link to='javascript' className='link'>JsTutorial This the javascript tutorial page </Link>
            </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Tutorials