import React, { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';

function Detail() {
  const [product,setProduct]=useState('');
    const {id}=useParams();// useParams conatin url name of item id
   
    const getProductData =async()=>{
   
        try {
            const singleProductInfo =await getDoc(doc(fireDb,'movies',id));
            setProduct(singleProductInfo.data());
          
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
    useEffect(()=>{
        getProductData()
    },[])
  return (
    // display movies data from firebase
    <div className={`w-full h-[700px] bg-cover bg-center relative  `} style={{ backgroundImage: `url(${product.coverImg})` }}>
    <div className=' w-full h-full absolute inset-0 bg-black linergreed'>
    <div className='w-1/2 px-7  py-5'>
    <span><img className='w-14' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    <div className='mt-8 capitalize font-bold'>
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
    <div className='mt-9'>
    <Link to={`/video/${id}`}><button className='w-28 h-10 font-bold rounded-md capitalize bg-slate-500'>trailer</button></Link>
    </div>
    </div>
    
    </div>
     


    </div>

  )
}

export default Detail