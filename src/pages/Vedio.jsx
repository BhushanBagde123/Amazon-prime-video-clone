import React, { useState,useEffect,useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";

import { CgMinimize } from "react-icons/cg";
import ReactPlayer from 'react-player';

function Vedio() {
  const [product,setProduct]=useState('');
    const {id}=useParams(); //contain id of a url
    const video = useRef(null);
    const[playing,setPlaying]=useState(true);
    const [currentTime,setCurrentTime]=useState(0);
    const [duration,setDuration]=useState(0);
    
   
    const navigate =useNavigate()
   
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
    const handelTime =()=>{
      const time =video.current.currentTime;
      const totalDuration =video.current.duration;
      setCurrentTime(time);
      setDuration(totalDuration);
   
    }
    const handeRnage =(e)=>{
      let newTime =e.target.value;
      video.current.currentTime =newTime;
      setCurrentTime(newTime)
    }
    const displayTime =(time)=>{
      const minutes =Math.floor(time/60);
      const seconds =Math.floor(time%60);
      return `${minutes}:${seconds<10?"0":""}${seconds}`;
    }
    
   

    
    useEffect(()=>{
        getProductData()
    },[])
  return (
    //normal video player
    // <div className='w-full h-screen relative'>
    //   <div className='w-full h-full absolute bg-black opacity-30'></div>
    //  <video className='w-full h-screen' src={product.video}  autoPlay ref={video} onTimeUpdate={handelTime} >
     
    //  </video>
    //  <button className='top-[50%] md:left-[50%] left-[45%] absolute z-30  ' onClick={videoPlay}>{playing?<IoMdPause size={40} className='hover:opacity-100 opacity-35' />:<FaPlay size={40} className='hover:opacity-100 opacity-35' />}</button>
    //  <div className='w-full h-14 gap-1 flex justify-center items-center flex-col absolute bottom-0'>
    //     <input className='w-[90%] h-1 accent-white ' type="range" min={0} max={duration} value={currentTime} onChange={handeRnage} />
      
    //   <div className='w-[90%] h-6 flex justify-between py-2'>
    //     <div><span>{displayTime(currentTime)}</span> / <span className='opacity-30'>{displayTime(duration)}</span></div>
    //     <CgMinimize className='cursor-pointer'/>
    //   </div>
    //  </div>
    
    // </div>
    <>
    {/* using react player */}
    <div className='w-full h-screen'>
      <ReactPlayer
      url={product.video}
      playing={true}
     
      controls
      width='100%'
      height='100%'
      
      />
    </div>
    </>
  )
}

export default Vedio