import { useParams } from 'react-router'

const Blogpost = () => {
    const {id}=useParams()
return <h1> Showing Post #{id}</h1>  

}

export default Blogpost