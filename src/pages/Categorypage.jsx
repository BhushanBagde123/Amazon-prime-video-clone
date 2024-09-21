import React from 'react'


function Categorypage() {
 
  return (
   <div className='w-full min-h-screen p-3'>
    <h1 className='text-4xl font-bold capitalize py-2'>Categories</h1>
    <h5 className='text-2xl font-bold capitalize py-2'>Genres</h5>
    <div className='w-full h-screen grid grid-cols-4 gap-3 py-2 capitalize font-bold  '>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>action&adventure </div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>anime</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>comedy</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>documentery</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>drama</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>fantasy</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>horror</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>kids</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>mystery&thrillers</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>romance</div>
      <div className='bg-pink-500 rounded-lg text-2xl flex items-center'>science fiction</div>
    </div>
   </div>
        
        
   
    
  )
}

export default Categorypage