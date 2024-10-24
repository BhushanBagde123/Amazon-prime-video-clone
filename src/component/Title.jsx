import React from 'react'

function Title({movie,show,liveshow}) {
  return (
    <div className='w-full lg:h-20 h-14 text-white font-bold lg:text-4xl text-2xl capitalize p-1 px-6'>{movie || show || liveshow}</div>
  )
}

export default Title