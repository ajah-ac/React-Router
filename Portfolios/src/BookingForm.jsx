import React from 'react'
import { useNavigate } from 'react-router'

const BookingForm = () => {
    const navigate=useNavigate()
function handleSubmit(e){
    e.preventDefault()
}
  return (
<>
<form action=""onSubmit={handleSubmit}>
<label htmlFor=""> Name:<input type="text" /></label>
<label htmlFor=""> email:<input type="text" /></label>
<button onClick={()=>{navigate('/thanks',{replace:true})}}>Book</button>
</form>
</>  )
}

export default BookingForm