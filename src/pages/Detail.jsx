import React, { useState,useEffect,useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
import Slider from '../component/Slider';
import  Mycontext from '../context/Mycontext'
import { IoAdd } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from 'react-toastify';

function Detail() {
  const [product,setProduct]=useState('');
 const [moviesDisplay,setMoviesDisplay]=useState([]);
 const navigate =useNavigate()
    const {id}=useParams();// useParams conatin url name of item id
    const context = useContext(Mycontext);
    const { myst, horror, romance,drama,user,like,setLike } = context; 
    const [mark,setMark]=useState(false);
   
    
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

    const addMovies = () => {
      if(user){
      // Check if the product is already in the wishlist
      const isProductInWishlist = user.wishlist.some(item => item.name === product.name);
      if (isProductInWishlist) {
        toast.error("already add in wishlist");
        return; // Exit if the product is already in the wishlist
      }
      setMark(true);
      // Add the product to the like array
      setLike(prevLike => [...prevLike, product]);
      toast.success("add to wishlist")
    }
    else{
      toast.warning("you are not login")
    }
    };
    console.log(like)
    useEffect(()=>{
        getProductData()
       
      
    },[id])
    
    useEffect(() => {
      if (product) {
        document.title = `Prime Video: ${product.name}`;
      }
    
    }, [product]);

   
  return (
    <>
    {/* // display movies data from firebase */}
    <div className={`w-full lg:h-[680px] md:h-[500px]   relative  `} >
    <picture className='w-full h-full'>
  <source type='image/webp' srcSet={`${product.coverImg}`} />
  <img src={`${product.coverImg}`} alt='Product Cover' className=' w-full md:h-full h-[220px] sm:h-[300px] relative' />
</picture>

    <div className=' w-full h-full absolute inset-0 bg-black  linergreedBottom '>
    <div className='w-[70%] px-7  hidden md:block py-5'>
    <span className='hidden md:block'><img className='w-14 ' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    <div className='mt-8  capitalize font-bold'>
      <h1 className='text-5xl font-bold'>{product.name }</h1>  
    </div>
    <div className='mt-10 text-xl md:text-sm  lg:text-xl capitalize font-bold'>
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
   {user?<Link to={`/video/${id}`}><button className='w-14 h-14 font-bold rounded-md capitalize flex items-center justify-center bg-black opacity-55 hover:opacity-100'><MdOutlineVideoLibrary size={38}  aria-label='video' /></button></Link>:<button onClick={()=>navigate('/login')} className='w-14 h-14 font-bold rounded-md capitalize flex items-center justify-center bg-black opacity-55 hover:opacity-100'><MdOutlineVideoLibrary size={38}  aria-label='login' /></button>} 
    <span className='w-14 h-14 bg-black opacity-55 font-bold hover:opacity-100 flex justify-center items-center rounded-full cursor-pointer'>{mark?<IoMdCheckmark size={38} onClick={addMovies} />:<IoAdd size={38} onClick={addMovies}/>}</span>
    </div>
    </div>
    <div className=' md:hidden w-full  absolute top-[50%]  p-4'>
    <span className=''><img className='w-14' src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_SY52.5_FMpng_.png" alt="" /></span>
    </div>
    <div className='md:hidden absolute top-[70%] p-4 capitalize '>
    <h1 className=' w-full  text-3xl font-bold h-auto '>{product.name}</h1> 
    </div> 
    </div>
    </div>
    <div className='w-full h-auto md:hidden flex flex-col'>
    <div className=' mt-9 flex gap-6 items-center px-4'>
   {user?<Link to={`/video/${id}`}><button className='w-9 h-9 font-bold rounded-md capitalize flex items-center justify-center '><MdOutlineVideoLibrary size={25}  aria-label='video' /></button></Link>:<Link to={'/login'}><button className='w-9 h-9 font-bold rounded-md capitalize flex items-center justify-center '><MdOutlineVideoLibrary size={25}  aria-label='login' /></button></Link>} 
    <span className='w-9 h-9  font-bold  flex justify-center items-center rounded-full cursor-pointer'><IoAdd size={25} onClick={addMovies}/></span>
    </div>
    <div className='mt-5 text-sm  capitalize font-bold p-4'>
    <p>{product. detail}</p>
    </div>
    <div className='flex px-4   '>
      <ul className='flex gap-4 uppercase text-gray-500 text-sm font-bold '>
        <li>imdb: {product.imdb}</li>
      <li>{product.time}</li>
      <li>{product.year}</li>
      <li>uhd</li>
      <li>u/a 13+</li></ul>
    </div>
    <div className='flex capitalize px-4 text-sm py-1 font-bold list-none'>
    <Link to={`/moviecategory/${product.category}`}><li>{product.category}</li></Link>  
      
    </div>
    </div>
    
    <div className='w-full h-80   md:p-3 mt-4 lg:mt-0 '>
      <h1 className='md:text-2xl text-xl  font-bold capitalize px-4 md:px-3'>related movies</h1>
      <Slider moviesDisplay={moviesDisplay}/>
    </div>
    
    
    </>
  )
}

export default Detail