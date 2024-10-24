import React from 'react'
import Title from '../component/Title'


function Liveshow() {
  document.title ="prime video | Live Tv"
  const LiveShow ="live tv"
  return (
  <div>
    <Title liveshow={LiveShow}/>

  </div>
  )
}

export default Liveshow