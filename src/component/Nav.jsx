import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink,Link, } from 'react-router-dom';
import  './nav.css'
function Nav() {
 

  

  return (
    <>
    <nav className={`w-full lg:h-16 h-11 text-white sticky top-0 z-40 bg-black flex justify-between items-center p-2 px-5 align-middle capitalize font-semibold`}>
        <div className='flex gap-2 w-[60%] justify-between'>
          <div className='md:hidden flex items-center w-24 '>
              <span>menu</span>
              <div className=' px-6 hidden'>
                <ul className='  lg:flex gap-4 justify-center items-center  '>
               <NavLink to={'/'}><li className='hover p-3 rounded-md'>home</li></NavLink> 
               <NavLink to={'/movies'}><li className='hover p-3 rounded-md'>movies</li></NavLink> 
               <NavLink to={'/tvshows'}><li className='hover p-3 rounded-md'>tv shows</li></NavLink> 
               <NavLink to={'/liveshow'}><li className='hover p-3 rounded-md'>live TV</li></NavLink>
                </ul>
                    
            </div>
          </div>
            <div className='flex items-center justify-center'><Link to={'/'}><img src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png" alt="" className='lg:w-24 w-24' /></Link></div>
            <div className='md:flex  px-6 hidden'>
                <ul className='  lg:flex gap-4 justify-center items-center  '>
               <NavLink to={'/'}><li className='hover p-3 rounded-md'>home</li></NavLink> 
               <NavLink to={'/movies'}><li className='hover p-3 rounded-md'>movies</li></NavLink> 
               <NavLink to={'/tvshows'}><li className='hover p-3 rounded-md'>tv shows</li></NavLink> 
               <NavLink to={'/liveshow'}><li className='hover p-3 rounded-md'>live TV</li></NavLink>
                </ul>
                    
            </div>
            <div className='w-2 h-16 lg:flex justify-center items-center hidden'>
            <div className=' h-7 w-1 bg-slate-500'></div>
            </div>
            
          
            <div className='lg:w-28 hidden h-16 lg:flex items-center '>
             <span className='w-full hover rounded-md p-3'> subcriptions</span></div>
        </div>
        <div className='flex w-1/4 justify-end lg:gap-9  items-center'>
       <span className='lg:hover p-3 rounded-full'><HiMagnifyingGlass className='w-5 h-5 lg:w-7 lg:h-7' /></span> 
    <NavLink to={'/category'}><span className='lg:hover hidden lg:block   rounded-full'><TbGridDots  className='w-5 h-5 lg:w-7 lg:h-7' /></span></NavLink>
        <span className='lg:hover p-3 rounded-full'><BsPersonCircle  className='w-5 h-5 lg:w-7 lg:h-7'/>   </span>
        </div>

    </nav>
    </>
  )
}

export default Nav