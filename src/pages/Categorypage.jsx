import React from 'react'


function Categorypage() {
  const category =[
    "action&adventure","anime","comedy","documentery","drama",
    "fantasy","horror","kids","mystery&thrillers","romance","science fiction"
  ]
 
  return (
   <div className='w-full min-h-screen p-3 '>
    <h1 className='md:text-4xl text-2xl font-bold capitalize py-2 px-3 md:px-0'>Categories</h1>
    <h5 className='md:text-2xl text-xl font-bold capitalize py-2  px-3 md:px-0'>Genres</h5>
    <div className='w-full h-screen grid md:grid-cols-4 grid-cols-2 gap-3 py-2 px-3 md:px-0 capitalize font-bold  '>
      {category.map((item)=>{
        return(
          <div className='category rounded-lg md:cursor-pointer md:text-2xl text-sm flex items-center px-2'>{item} </div>
        )
      })}
      
    </div>
   </div>
        
        
   
    
  )
}

export default Categorypage