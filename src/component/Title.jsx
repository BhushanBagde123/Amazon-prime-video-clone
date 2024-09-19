import React from 'react'

function Title({movie,show}) {
  return (
    <div className='w-full h-20 text-white font-bold text-4xl capitalize p-1 px-6'>{movie || show}</div>
  )
}

export default Title