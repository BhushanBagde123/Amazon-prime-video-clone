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
 document.title ="prime video | Tv Shows"
  return (
    <>
     <HeroSlider/>
     {/* passing props */}
     <Title show={show}/>
     <Category mystTv={myst} tvOne={"mystery&thriller tv"}/>
     <Category horrorTv={horror} tvTwo={"horror tv"}/>
     <Category romanceTv={romance} tvThree={"romance tv"}/>
     <Category dramaTv={drama} tvFour={"drama tv"}/>
     <Topcontainer show={show} />
     </>
  )
}

export default Tvshow