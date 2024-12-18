import React ,{ useState,useContext} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, fireDb } from '../firebase/Firebase';
import Mycontext from '../context/Mycontext'
import { toast } from 'react-toastify';
import Loader from '../component/Loader';
function Login() {
    const [password,setPassword]=useState('');
    const [email,setEmail] =useState('');
    const [eye,setEye]=useState(false);
    // const [loading,setLoading]= useState(false)
    const navigate =useNavigate();
    const { setUser } = useContext(Mycontext)
    
     const toggelEye=()=>{
        setEye(!eye);

     }
     
     const signIn = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
          return alert("Please fill all the fields");
        }
     
        try {
          const users = await signInWithEmailAndPassword(auth, email, password);
         
          console.log("Login");
          setUser(users?.user)
          localStorage.setItem("user", JSON.stringify(users?.user))
          // Navigate after login
          navigate("/");
      
          // Fetch user data from Firestore
          const q = query(
            collection(fireDb, "users"),
            where('uid', '==', users?.user?.uid)
          );
      
          const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let user;
            QuerySnapshot.forEach((doc) => user = doc.data());
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user)
          });
      
          // Cleanup the listener when the component unmounts
          return () => {
            if (unsubscribe) {
              unsubscribe();
            }
          };
      
        } catch (error) {
          toast.error(error.message)
         
        }
      };
document.title ="Login"
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center relative'>
      {/* <div className='z-20 absolute top-[50%] left-[50%]'>
        {loading&& <Loader/>}
      </div> */}
        <form action="" className='w-96 h-[350px] bg-pink-300 rounded-md text-black capitalize flex justify-center items-center flex-col gap-6'>
            <h1 className='text-xl font-bold'>Login</h1>
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
        <button type='submit' onClick={signIn} className='capitalize bg-yellow-300 font-semibold w-32 h-12 rounded-md'>
            sign in
        </button>
        
        <Link to={'/signup'}><span className='font-bold'>create accout</span></Link>
        </div>
        </form>
    </div>
  )
}

export default Login