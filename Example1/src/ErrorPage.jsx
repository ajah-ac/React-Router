import errorImg from './assets/error404.gif'
import React from 'react'
import { Link } from 'react-router'
const ErrorPage = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Link to='/' style={{textDecoration:'none'}}>Back to Home Page</Link>
            <h1>
                Oops...
                Page not Found
            </h1>
            <h2>Error:404</h2>
            <img src={errorImg} alt="" /></div>
    )
}

export default ErrorPage