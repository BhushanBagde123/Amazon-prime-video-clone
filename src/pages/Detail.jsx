import React, { useState,useEffect,useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
import Slider from '../component/Slider';
import  Mycontext from '../context/Mycontext'
import { IoAdd } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";

function Detail() {
  const [product,setProduct]=useState('');
 const [moviesDisplay,setMoviesDisplay]=useState([]);
 const navigate =useNavigate()
    const {id}=useParams();// useParams conatin url name of item id
    const context = useContext(Mycontext);
    const { myst, horror, romance,drama,user } = context; 
   
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
    <div className={`w-full lg:h-[700px]   relative  `} >
    <picture className='w-full h-full'>
  <source type='image/webp' srcSet={`${product.coverImg}`} />
  <img src={`${product.coverImg}`} alt='Product Cover' className=' w-full lg:h-full h-[220px] relative' />
</picture>

    <div className=' w-full h-full absolute inset-0 bg-black  linergreedBottom '>
    <div className='w-[70%] px-7  hidden lg:block py-5'>
    <span className='hidden lg:block'><img className='w-14' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    <div className='mt-8  capitalize font-bold'>
      <h1 className='text-5xl font-bold'>{product.name}</h1>  
    </div>
    <div className='mt-8 text-xl  capitalize font-bold'>
    <p>{product. detail}</p>
    </div>
    <div className='flex mt-8   '>
      <ul className='flex gap-4 uppercase font-bold '>
        <li>imdb:{product.imdb}</li>
      <li>{product.time}</li>
      <li>{product.year}</li>
      <li>uhd</li>
      <li>u/a 13+</li></ul>
    </div>
    <div className='flex gap-4 capitalize mt-4 font-bold'>
    <Link to={`/moviecategory/${product.category}`}><li>{product.category}</li></Link>  
      
    </div>
    <div className='mt-9 flex gap-6 items-center'>
   {user?<Link to={`/video/${id}`}><button className='w-14 h-14 font-bold rounded-md capitalize flex items-center justify-center bg-slate-500'><MdOutlineVideoLibrary size={38} /></button></Link>:<button onClick={()=>navigate('/login')} className='w-14 h-14 font-bold rounded-md capitalize flex items-center justify-center bg-slate-500'><MdOutlineVideoLibrary size={38} /></button>} 
    <span className='w-14 h-14 bg-slate-500 font-bold  flex justify-center items-center rounded-full cursor-pointer'><IoAdd size={38}/></span>
    </div>
    </div>
    <div className=' lg:hidden w-full  absolute top-[50%]  p-4'>
    <span className=''><img className='w-14' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    </div>
    <div className='lg:hidden absolute top-[70%] p-4 capitalize '>
    <h1 className=' w-full  text-3xl font-bold h-auto '>{product.name}</h1> 
    </div> 
    </div>
    </div>
    <div className='w-full h-auto lg:hidden flex flex-col'>
    <div className=' mt-9 flex gap-6 items-center px-4'>
    <Link to={`/video/${id}`}><button className='w-9 h-9 font-bold rounded-md capitalize flex items-center justify-center '><MdOutlineVideoLibrary size={25} /></button></Link>
    <span className='w-9 h-9  font-bold  flex justify-center items-center rounded-full cursor-pointer'><IoAdd size={25}/></span>
    </div>
    <div className='mt-5 text-sm  capitalize font-bold p-4'>
    <p>{product. detail}</p>
    </div>
    <div className='flex px-4   '>
      <ul className='flex gap-4 uppercase text-gray-500 text-sm font-bold '>
        <li>imdb:{product.imdb}</li>
      <li>{product.time}</li>
      <li>{product.year}</li>
      <li>uhd</li>
      <li>u/a 13+</li></ul>
    </div>
    <div className='flex capitalize px-4 text-sm py-1 font-bold list-none'>
    <Link to={`/moviecategory/${product.category}`}><li>{product.category}</li></Link>  
      
    </div>
    </div>
    
    <div className='w-full h-80   lg:p-3 mt-4 lg:mt-0 '>
      <h1 className='lg:text-2xl text-xl  font-bold capitalize px-4 lg:px-3'>related movies</h1>
      <Slider moviesDisplay={moviesDisplay}/>
    </div>
    
    
    </>
  )
}

export default Detail