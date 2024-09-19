import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function ArrowButton({onClick,direction}) {
  return (
    <div 
    className={`absolute ${direction === 'next' ? 'right-5' : 'left-5'} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
    onClick={onClick}
  >
    {direction === 'next' ? 
      <FaArrowRight size={30} className="text-white bg-black rounded-full p-2" /> :
      <FaArrowLeft size={30} className="text-white bg-black rounded-full p-2" />
    }
  </div>
  
  )
}

export default ArrowButton