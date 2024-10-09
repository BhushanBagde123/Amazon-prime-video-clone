import React from 'react'
import { Link } from 'react-router-dom'

const PopDetail = ({id,name,close,closePopUp}) => {
  return (
    <div className='w-full h-[350px]  fixed bottom-0 z-20 bg-black '>
        <div className='w-full h-full p-4'>
            <div className='flex justify-between capitalize font-bold'>
                <h1 className='text-2xl'>{name}</h1>
                <button onClick={close || closePopUp} className='text-2xl'>x</button>
            </div>
            <div className='mt-11'>
                <ul className="capitalize flex flex-col gap-9">
                  <Link to={`/video/${id}`}><li>watch trailer</li></Link>  
                    <li>wishlist</li>
                  <Link to={`/detail/${id}`}> <li>more detail</li></Link> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PopDetail