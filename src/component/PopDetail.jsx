import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import Mycontext from '../context/Mycontext'

const PopDetail = ({id,name,close,closePopUp}) => {
  const {user} =useContext(Mycontext)
  return (
    <div className='w-full h-[300px]  fixed bottom-0 z-20 bg-gray-900 rounded-t-lg '>
        <div className='w-full h-full p-4'>
            <div className='flex justify-between capitalize font-bold'>
                <h1 className='text-2xl'>{name}</h1>
                <button onClick={close || closePopUp} className='text-2xl'><RxCross1 /></button>
            </div>
            <div className='mt-11'>
                <ul className="capitalize flex flex-col gap-9">
              {user?<Link className='flex items-center gap-2 font-bold' to={`/video/${id}`}><TbMovie  size={22}  aria-label='video' /><li>watch trailer</li></Link>  :<Link className='flex items-center gap-2 font-bold' to={'/login'}><TbMovie  size={22}  aria-label='login' /><li>watch trailer</li></Link>}    
                  <span className='flex items-center gap-2 font-bold'><IoAdd  size={22}/><li>wishlist</li></span>  
                  <Link className='flex items-center gap-2 font-bold' to={`/detail/${id}`}><HiMiniExclamationCircle size={22}  aria-label='detail' /> <li>more detail</li></Link> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PopDetail