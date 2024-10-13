import React,{useState,useEffect} from 'react'
import Mycontext from './Mycontext'
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
function Mystate({children}) {
    const [user,setUser] =useState(JSON.parse(localStorage.getItem("user")));
    const [getAllProducts,setAllProducts]=useState([]);
    const [myst,setMyst]=useState([]);
    const [horror,setHorror]=useState([]);
    const [romance ,setRomance]=useState([]);
    const [drama,setDrama]=useState([]);
    const [topImdb,setTopImdb]=useState([]);
    const [like,setLike]=useState([]);
   

    const getProducts =async()=>{
      
      try {
        const q= query(
          collection(fireDb,'movies'),
         
        );
        const data =onSnapshot(q,(QuerySnapshot)=>{
          let productArray =[];
          QuerySnapshot.forEach((doc)=>{
            productArray.push({ ...doc.data(),id:doc.id});
          });
          setAllProducts(productArray);
        
         const mysteryThriller =productArray.filter((p)=>p.category ==="mystery thrill")
       
         setMyst(...myst,mysteryThriller)
        
         const horrorMovies =productArray.filter((p)=>p.category ==="horror");
         setHorror(...horror,horrorMovies)
         
         const romanceMovies =productArray.filter((p)=>p.category ==="romance");
          setRomance(...romance,romanceMovies)
        const dramaMovies =productArray.filter((p)=>p.category ==="drama");
          setDrama(...drama,dramaMovies);

        const topImdbMovies=productArray.filter((p)=>p.imdb >=7);
        setTopImdb(...topImdb,topImdbMovies)
          
         
        });
        return ()=> data
        
      } catch (error) {
        console.log(error);
       
      }

    }
    useEffect(()=>{
      getProducts();
    },[])

  return (
    <Mycontext.Provider value={{
        user,setUser,myst,horror,romance
        ,drama,topImdb,getAllProducts,like,setLike
    }}>
        {children}

    </Mycontext.Provider>
  )
}

export default Mystate