import React from 'react'
import { useParams } from 'react-router'
const Portfolio = () => {
  const {id}=useParams()
  return (
    <> {!id && <h1>This is the portfolio section(utilizes useParams)</h1>}
    {id && <h1>Portfolio{id}</h1>}
    </>

  )
}

export default Portfolio