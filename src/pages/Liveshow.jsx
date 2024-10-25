import React from 'react'
import Title from '../component/Title'


function Liveshow() {
  document.title ="Prime Video | Live Tv"
  const LiveShow ="live tv"
  return (
  <div>
    <Title liveshow={LiveShow}/>

  </div>
  )
}

export default Liveshow