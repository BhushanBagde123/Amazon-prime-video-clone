import React from 'react'
import { Link } from 'react-router-dom'
function DropDownProfile() {
  return (
    <div className='mt-10 w-48 h-60 rounded-md bg-gray-900 p-4'>
        <h1 className='text-2xl opacity-70 '>your account</h1>
        <Link to={'/login'}>
        sign in
        </Link>
    </div>
  )
}

export default DropDownProfile