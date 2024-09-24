import React, { useState,useEffect,useContext } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
import Slider from '../component/Slider';
import  Mycontext from '../context/Mycontext'
import { IoAdd } from "react-icons/io5";

function Detail() {
  const [product,setProduct]=useState('');
 const [moviesDisplay,setMoviesDisplay]=useState([])
    const {id}=useParams();// useParams conatin url name of item id
    const context = useContext(Mycontext);
    const { myst, horror, romance,drama } = context; 
   
    const getProductData =async()=>{
   
        try {
            const singleProductInfo =await getDoc(doc(fireDb,'movies',id));
            setProduct(singleProductInfo.data());
          
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
    useEffect(()=>{
      if(product){
        if(product.category ==="mystery thrill"){
          setMoviesDisplay([...myst])
    
        }
        else if(product.category ==="horror"){
          setMoviesDisplay([...horror]);
        }
        else if(product.category==="romance"){
          setMoviesDisplay([...romance]);
        }
        else if(product.category==="drama"){
          setMoviesDisplay([...drama]);
        }
      }

    },[product,myst,horror,drama,romance])
    
    useEffect(()=>{
        getProductData()
    },[id])
  return (
    <>
    {/* // display movies data from firebase */}
    <div className={`w-full h-[700px] bg-cover bg-center relative  `} style={{ backgroundImage: `url(${product.coverImg})` }}>
    <div className=' w-full h-full absolute inset-0 bg-black linergreed'>
    <div className='w-[70%] px-7  py-5'>
    <span><img className='w-14' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    <div className='mt-8  capitalize font-bold'>
      <h1 className='text-5xl font-bold'>{product.name}</h1>  
    </div>
    <div className='mt-8 text-xl capitalize font-bold'>
    <p>{product. detail}</p>
    </div>
    <div className='flex mt-8 '>
      <ul className='flex gap-4 uppercase font-bold'>
        <li>imdb:{product.imdb}</li>
      <li>{product.time}</li>
      <li>{product.year}</li>
      <li>uhd</li>
      <li>u/a 13+</li></ul>
    </div>
    <div className='flex gap-4 capitalize mt-4 font-bold'>
    <Link to={`/moviecategory/${product.category}`}><li>{product.category}</li></Link>  
      
    </div>
    <div className='mt-9 flex gap-3 items-center'>
    <Link to={`/video/${id}`}><button className='w-28 h-10 font-bold rounded-md capitalize bg-slate-500'>trailer</button></Link>
    <span className='w-14 h-14 bg-slate-500 font-bold  flex justify-center items-center rounded-full cursor-pointer'><IoAdd size={38}/></span>
    </div>
    </div>
    
    </div>
     
   
    </div>
    <div className='w-full h-16 p-3 '>
      <h1 className='text-2xl font-bold capitalize px-3'>related movies</h1>
    </div>
    <Slider moviesDisplay={moviesDisplay}/>
    </>
  )
}

export default Detail