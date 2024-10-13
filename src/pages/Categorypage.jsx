import React from 'react'
import { Link } from 'react-router-dom'


function Categorypage() {
  const category =[
    "action&adventure","anime","comedy","documentery","drama",
    "fantasy","horror","kids","mystery&thrillers","romance","science fiction"
  ]
  document.title ="prime video | Genres"
 
  return (
   <div className='w-full min-h-screen p-3 '>
    <h1 className='md:text-4xl text-2xl font-bold capitalize py-2 px-3 md:px-0'>Categories</h1>
    <h5 className='md:text-2xl text-xl font-bold capitalize py-2  px-3 md:px-0'>Genres</h5>
    <div className='w-full h-auto grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3 py-2 px-3 md:px-0 capitalize font-bold  '>
      {category.map((item,id)=>{
        return(
       <Link key={id} to={`/geners/${item}`}> <div  className='category h-24 sm:h-44 md:h-44 rounded-lg md:cursor-pointer sm:text-2xl text-sm flex items-center px-2'>{item} </div></Link>  
        )
      })}
      
    </div>
   </div>
        
        
   
    
  )
}

export default Categorypage