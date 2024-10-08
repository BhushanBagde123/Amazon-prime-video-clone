import React ,{useContext}from 'react'
import { NavLink } from 'react-router-dom'
import  './nav.css'
import Mycontext from '../context/Mycontext'

function DropDownMenu() {
  const context =useContext(Mycontext)
  const {user}=context
  return (
    <div className={` px-6 z-20 w-48  rounded-md h-96 top-[40px] right-[-100px]  bg-slate-900 absolute`}>
    <ul className='  flex flex-col py-4  '>
   <NavLink to={'/'}><li className=' p-3 rounded-md'>home</li></NavLink> 
   <NavLink to={'/movies'}><li className=' p-3 rounded-md'>movies</li></NavLink> 
   <NavLink to={'/tvshows'}><li className=' p-3 rounded-md'>tv shows</li></NavLink> 
   <NavLink to={'/liveshow'}><li className=' p-3 rounded-md'>live TV</li></NavLink>
   <NavLink to={'/category'}><li className='hover p-3 rounded-md'>category</li></NavLink>
   {user&&<NavLink to={'/mystuff'}><li className='hover p-3 rounded-md'>mystuff</li></NavLink>}
    </ul>
        
</div>
  )
}

export default DropDownMenu