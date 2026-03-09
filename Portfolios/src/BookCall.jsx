import React from 'react'
import { useNavigate } from 'react-router'

const BookCall = () => {
    const navigate=useNavigate()
  return (
<>
<h1>Hello <br/>Contact me on:janedoe@gmail.com</h1>
<button onClick={()=>{navigate('/bookform',{replace:true})}}>Book  now  </button>
</>  )
}

export default BookCall