import React from 'react'
import { Link } from 'react-router'

import { useParams } from 'react-router'
const Blog = () => {
    const posts=[{id:1,title:'Biography'},
        {id:2,title:'Awards'}]
  return (
    <><h1>This is the blog page</h1>
    <ul style={{listStyleType:'none'}}>
{posts.map(post=>(
    <li key={post.id}  >
        <Link to={`/blog/${post.id}`}  className='link' > {post.title}</Link>
    </li>
))}

    </ul>
    
    
    </>
  )
}

export default Blog
