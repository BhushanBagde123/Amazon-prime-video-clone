import React from 'react'
import { useLocation } from 'react-router-dom'

function Categorypage() {
  const location =useLocation();
  const {category,movies}=location.state ||{ category: 'All', movies: [] }
  return (
   
        <div>category</div>
        
   
    
  )
}

export default Categorypage