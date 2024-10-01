import React, { useState,useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";

function Vedio() {
  const [product,setProduct]=useState('');
    const {id}=useParams(); //contain id of a url
    const video = useRef(null);
    const[playing,setPlaying]=useState(true);
   
    const getProductData =async()=>{
   
        try {
            const singleProductInfo =await getDoc(doc(fireDb,'movies',id));
            setProduct(singleProductInfo.data());
          
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    const videoPlay=()=>{
      if(playing){
        video.current.pause();
      }
      else{
     
        video.current.play();
      }
      setPlaying(!playing);

    
    }
    
    useEffect(()=>{
        getProductData()
    },[])
  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-full absolute bg-black opacity-30'></div>
     <video className='w-full h-full' src={product.video}  autoPlay ref={video} >
     
     </video>
     <button className='top-[50%] md:left-[50%] left-[45%] absolute z-30  ' onClick={videoPlay}>{playing?<IoMdPause size={40} className='hover:opacity-100 opacity-35' />:<FaPlay size={40} className='hover:opacity-100 opacity-35' />}</button>
    </div>
  )
}

export default Vedio