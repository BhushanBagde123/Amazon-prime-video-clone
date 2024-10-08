import React, { useContext, useState,useEffect } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, fireDb } from '../firebase/Firebase';
import { setDoc,doc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loader from '../component/Loader'

function signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate =useNavigate();
  const [loading,setLoading]=useState(false);
  

  
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
    <div className='flex justify-center items-center relative align-middle w-full h-[100vh] bg-slate-600'>
      <div className='absolute top-[50%]'>{loading&&<Loader/>}</div>
      <form className='w-80 h-80 md:h-[500px] md:w-[500px] text-black bg-pink-400 flex flex-col items-center gap-5 md:pt-10'>
        <div className='capitalize'><h1>Sign Up</h1></div>
        <div>
          <label>Name</label>
          <br />
          <input 
            type="text" 
            placeholder='Name'
            value={name}
            onChange={(e) => setName( e.target.value )}
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input 
            type="email"  
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail( e.target.value )}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword( e.target.value )}
          />
        </div>
        <div>
        <button 
          onClick={usersignup} 
          className='w-28 h-12 bg-black text-white rounded-md capitalize font-bold'>
          Sign Up
        </button>
        </div>
      </form>
    </div>
  )
}

export default signup