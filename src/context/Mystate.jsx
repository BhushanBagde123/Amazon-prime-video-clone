import React,{useState,useEffect} from 'react'
import Mycontext from './Mycontext'
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { fireDb } from '../firebase/Firebase';
function Mystate({children}) {
    const user =JSON.parse(localStorage.getItem("user"));
    const [getAllProducts,setAllProducts]=useState([]);
    const [myst,setMyst]=useState([]);
    const [horror,setHorror]=useState([]);
    const [romance ,setRomance]=useState([]);
    const [drama,setDrama]=useState([]);

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
          console.log(getAllProducts)
         const mysteryThriller =productArray.filter((p)=>p.category ==="mystery thrill")
         console.log('Mystery Thrillers:', mysteryThriller);
         setMyst(...myst,mysteryThriller)
        
         const horrorMovies =productArray.filter((p)=>p.category ==="horror");
         setHorror(...horror,horrorMovies)
         
         const romanceMovies =productArray.filter((p)=>p.category ==="romance");
          setRomance(...romance,romanceMovies)
        const dramaMovies =productArray.filter((p)=>p.category ==="drama");
          setDrama(...drama,dramaMovies);
         
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
        user,myst,horror,romance,drama
    }}>
        {children}

    </Mycontext.Provider>
  )
}

export default Mystate