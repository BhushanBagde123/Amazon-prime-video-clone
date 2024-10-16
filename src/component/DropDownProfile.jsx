import React from 'react'
import { Link } from 'react-router-dom'
function DropDownProfile({user,logout}) {
  return (
    <div className='md:mt-10 mt-4 md:w-48 md:h-60 w-40 h-56 rounded-md bg-gray-900 p-4'>
        <h1 className='md:text-2xl opacity-70 text-xl'>your account</h1>
       {user? <span onClick={logout}>sign out</span>:<Link to={'/login'}>
        sign in
        </Link>} 
    </div>
  )
}

export default DropDownProfile