import React,{useContext} from 'react'
import HeroSlider from '../component/Heroslider'
import Title from '../component/Title'
import Category from '../component/Category'
import Mycontext from '../context/Mycontext'
import Topcontainer from '../component/Topcontainer'
function Tvshow() {
  const show ='TV shows'
  const context = useContext(Mycontext)
 const {myst,horror,romance,drama} =context // destucture elements form context
 
  return (
    <>
     <HeroSlider/>
     {/* passing props */}
     <Title show={show}/>
     <Category mystTv={myst} tvOne={"mystery&thriller"}/>
     <Category horrorTv={horror} tvTwo={"horror"}/>
     <Category romanceTv={romance} tvThree={"romance"}/>
     <Category dramaTv={drama} tvFour={"drama"}/>
     <Topcontainer show={show} />
     </>
  )
}

export default Tvshow