import React, { useContext, useState,useEffect } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, fireDb } from '../firebase/Firebase';
import { setDoc,doc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loader from '../component/Loader'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate =useNavigate();
  const [loading,setLoading]=useState(false);
   document.title ="Register"

   const [eye,setEye]=useState(false);
    
     const toggelEye=()=>{
        setEye(!eye);

     }
  const usersignup=async(e)=>{
    e.preventDefault();
    if(name==""||email==""||password==""){
      return alert("enetr all the field")
    }
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user =auth.currentUser;
     
      if(user){
        const useDocRef =doc(fireDb,"users",user.uid)
        
        await setDoc(useDocRef,{
          name:name,
          email:user.email,
          password:password,
          uid: user.uid, 
          role:'user'
        })
      }
      setName('');
      setEmail("");
      setPassword('')
      // console.log(user);
      console.log("user registered successfully");
      setLoading(false);
      navigate('/login');
      
    } catch (error) {
      console.log(error.message)
      setLoading(false);
    }
   
  }
  return (
    <div className='w-full h-screen bg-black flex text-black justify-center items-center'>
        <form action="" className='w-96 h-[350px] bg-pink-300 p-2 rounded-md capitalize flex justify-center items-center flex-col gap-6'>
          <div className='absolute top-[50%] z-20'>{loading&&<Loader/>}</div>
            <h1 className='text-xl font-bold'>sign up</h1>
        <div>
          <label>enter name</label>
          <br />
          <div className='w-full bg-white px-1'>
            <input type='text'
            placeholder='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)} 
             className='p-1 focus:outline-none w-52'/></div>
        </div>
        <div className=''>
            <label>enter email</label>
            <br />
            <div className='w-full bg-white px-1'> <input type="email" 
            placeholder='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className='p-1 focus:outline-none w-52' /></div>
           
        </div>
        <div>
            <label>enter password</label>
            <br />
            <div className='flex items-center w-full bg-white px-1 '> 
                <input type={eye?"text":"password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
             className='p-1 focus:outline-none w-52' />
             <span onClick={toggelEye}>
           {eye?(<FaEyeSlash className='cursor-pointer'  />):(password&&<FaEye className='cursor-pointer' />)} 
           </span>
            </div>
           
        </div>
        <div className='flex flex-col items-center gap-4'>
        <button type='submit' onClick={usersignup} className='capitalize bg-yellow-300 font-semibold w-32 h-12 rounded-md'>
            register
        </button>
        </div>
        </form>
    </div>
  )
}

export default signup