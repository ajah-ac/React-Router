import { Globe } from 'lucide-react'
import React from 'react'
import Woman from './assets/woman.png'

const AboutMe = () => {
  return (
    <section className='aboutme'>
<div><h1>About Me</h1>
<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
</div>
<div>
    <div className='globe-icon'><Globe/></div>
    <h1>120%</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
<div className='img-container'> <img src={Woman} alt="" /></div>
</div>


    </section>
  )
}

export default AboutMe