import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink,Link, } from 'react-router-dom';
import  './nav.css'
function Nav() {
 

  

  return (
    <>
    <nav className={`w-full h-16  text-white sticky top-0 z-40 bg-black flex justify-between items-center p-2 px-5 align-middle capitalize font-semibold`}>
        <div className='flex gap-2 w-[60%] justify-between'>
            <div className='flex items-center'><Link to={'/'}><img src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png" alt="" className='w-24' /></Link></div>
            <div className='flex  px-6 '>
                <ul className='flex gap-4 justify-center items-center  '>
               <NavLink to={'/'}><li className='hover p-3 rounded-md'>home</li></NavLink> 
               <NavLink to={'/movies'}><li className='hover p-3 rounded-md'>movies</li></NavLink> 
               <NavLink to={'/tvshows'}><li className='hover p-3 rounded-md'>tv shows</li></NavLink> 
               <NavLink to={'/liveshow'}><li className='hover p-3 rounded-md'>live TV</li></NavLink>
                </ul>
                    
            </div>
            <div className='w-2 h-16 flex justify-center items-center'>
            <div className=' h-7 w-1 bg-slate-500'></div>
            </div>
            
          
            <div className='w-28 flex items-center '>
             <span className='w-full hover rounded-md p-3'> subcriptions</span></div>
        </div>
        <div className='flex w-1/4 justify-end gap-9 items-center'>
       <span className='hover p-3 rounded-full'><HiMagnifyingGlass size={27} /></span> 
    <NavLink to={'/category'}><span className='hover  w-16 h-16 rounded-full'><TbGridDots  size={27} /></span></NavLink>
        <span className='hover p-3 rounded-full'><BsPersonCircle size={27}/>   </span>
        </div>

    </nav>
    </>
  )
}

export default Nav