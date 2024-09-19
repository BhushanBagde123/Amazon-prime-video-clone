import React from 'react'
import Heroslider from '../component/Heroslider'
import Category from '../component/Category'
import Title from '../component/Title'
import Topcontainer from '../component/Topcontainer'
import Mycontext from '../context/Mycontext'
import { useContext } from 'react'
function Movies() {
  const movie ='movies'
 const context = useContext(Mycontext)
 const {myst,horror,romance,drama} =context  //destucture elements form context
 


  return (
    <>
  <Heroslider/>
  {/* passing props */}
  <Title movie={movie}/>
  <Category myst={myst} categoryOne={"mystery&thriller movies"}/>
  <Category horror={horror} categoryTwo={"horror movies"}/>
  <Category romance={romance} categoryThree={"romance movies"}/>
  <Category drama={drama} categoryFour={"drama movies"}/>
  <Topcontainer movies={movie} />
  <Category topMovies ={horror} categoryFive={"top movies"}/>
  </>

  )
}

export default Movies