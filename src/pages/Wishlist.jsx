import React, { useContext } from 'react'
import Mycontext from '../context/Mycontext'

function Wishlist() {
  document.title ="prime video | Mystuff"
  const {like}=useContext(Mycontext);
 
 
 
  return (
    <>
    <div className='w-full h-screen p-5 mt-5 '>
    <div className='w-full text-white font-bold text-3xl capitalize py-2'>
    <h1>my stuff</h1>
    </div>
    <div className='text-2xl capitalize w-full font-bold flex gap-3 py-2'>
    <h5>Watchlist - Movies</h5>
  
    </div>
    <div className='w-full h-auto py-1 grid grid-cols-2 lg:grid-cols-4  sm:grid-cols-3 gap-3'>
  {like.length>0?(like.map((item,id)=>{
      return(
      <div key={id} className='cursor-pointer'>
      <img className='md:w-72 md:h-40 w-40 h-24 rounded-md ' src={item.img} alt="" />
        <h1 className='font-bold capitalize md:hidden'>{item.name.length>=18?item.name.substring(0,18)+"...":item.name}</h1>
      </div>
      )
    })): <h1 className='font-bold text-xl capitalize md:text-3xl'>no item</h1>}  
    </div>
    </div>
   {/* item.name.lenght>18?item.name.substring(0,18)+"...":item.name */}
    </>
  )
}

export default Wishlist