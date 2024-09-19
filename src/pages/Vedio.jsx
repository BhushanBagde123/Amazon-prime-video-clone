import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';

function Vedio() {
  const [product,setProduct]=useState('');
    const {id}=useParams(); //contain id of a url
   
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
    <div className='w-full h-screen'>
     <video className='w-full h-full' src={product.video}  autoPlay loop>

     </video>
    </div>
  )
}

export default Vedio