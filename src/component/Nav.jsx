import React, { useContext, useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink,Link, useNavigate, } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import  './nav.css'
import DropDownMenu from './DropDownMenu';
import DropDownProfile from './DropDownProfile';
import Mycontext from '../context/Mycontext'
import { FaBookmark } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';

function Nav() {
const [hide,setHide]=useState(false);
const navigator =useNavigate()
 
const menuFunction=()=>{
  setHide(!hide);
 
}
const [account,setAccount]=useState(false);
const {setUser,user} =useContext(Mycontext)

const dropDownAccount =()=>{
  setAccount(!account);
}

const logout = async () => {
  try {
    await signOut(auth); // Sign out from Firebase
    localStorage.removeItem("user");
    setUser(null) // Optionally, clear local storage
    navigator('/'); // Redirect to the homepage or login page
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};


  

  return (
    <>
    <nav className={`w-full md:h-14 h-11 text-white sticky top-0 z-40 bg-black flex justify-between items-center p-2 px-5 align-middle capitalize font-semibold`}>
        <div className='flex gap-2 w-[70%] justify-between'>
          <div className='lg:hidden flex items-center justify-center w-20 relative'>
             <div className='flex items-center gap-2 justify-center'onClick={menuFunction}> <span className='text-xl ' >menu</span>{hide==false?<MdKeyboardArrowDown size={18} />:<MdKeyboardArrowUp size={18} />}</div>
              {hide&& <DropDownMenu/>}
          </div>
            <div className='flex items-center justify-center w-[60%] lg:w-auto  '><Link to={'/'}><img src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png" alt="logo" className='md:w-24 w-24'  aria-label='logo' /></Link></div>
            <div className='lg:flex px-6   hidden '>
                <ul className=' flex gap-4 justify-center  items-center  '>
               <NavLink to={'/'}><li className='hover p-3 rounded-md'>home</li></NavLink> 
               <NavLink to={'/movies'}><li className='hover p-3 rounded-md'>movies</li></NavLink> 
               <NavLink to={'/tvshows'}><li className='hover p-3 rounded-md'>tv shows</li></NavLink> 
               <NavLink to={'/liveshow'}><li className='hover p-3 rounded-md'>live TV</li></NavLink>
              
                </ul>
                    
            </div>
            <div className='w-2 h-16 lg:flex justify-center items-center hidden'>
            <div className=' h-7 w-1 bg-slate-500'></div>
            </div>
            
          
            <div className='w-28 hidden h-16 lg:flex items-center '>
             <span className='w-full hover rounded-md p-3'> subcriptions</span></div>
        </div>
        <div className='flex w-1/4 justify-end lg:gap-6  items-center relative'>
    <Link className='hover p-3 rounded-full flex items-center' to={'/search'}  aria-label='search'>   <span><HiMagnifyingGlass className='w-5 h-5 md:w-7 md:h-7' aria-label='search' /></span> </Link>
      {user&&<NavLink to={'/mystuff'}><span className='hover p-3 hidden lg:block rounded-full ' aria-label='wishlist'><FaBookmark  className='w-5 h-5 md:w-7 md:h-7'aria-label='wishlist' /></span></NavLink> } 
    <NavLink to={'/category'}><span className='hover hidden lg:block p-3 rounded-full ' aria-label='geners'><TbGridDots  className='w-5 h-5 md:w-7 md:h-7 ' aria-label='geners' /></span></NavLink>
        <span className='hover p-3 rounded-full  cursor-pointer' onMouseEnter={()=>setAccount(true)} onMouseLeave={()=>setAccount(false)}><BsPersonCircle onClick={dropDownAccount}  className='w-5 h-5 lg:w-7 lg:h-7'/> 
        {account&& (<div className=' bg-transparent hidden md:block text-white  right-0 top-[45px] absolute'>
          <div className='absolute w-full h-10 top-0 bg-transparent rounded-md'></div>
          <DropDownProfile user={user} logout={logout}/>
          </div>)}
          
          {account&& (<div className=' bg-transparent  md:hidden text-white  right-0 top-[45px] absolute'>
          <div className='absolute w-full h-10 top-0 bg-transparent rounded-md'></div>
          <DropDownProfile user={user} logout={logout}/>
          </div>)}
         </span>
       
        </div>
      
       

    </nav>
    </>
  )
}

export default Nav