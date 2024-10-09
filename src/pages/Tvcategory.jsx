import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Mycontext from '../context/Mycontext';
import { BsThreeDotsVertical } from "react-icons/bs";
import PopDetail from '../component/PopDetail';


function Tvcategory() {
  const { tvcategory } = useParams(); // Get the category from the URL parameter
  const context = useContext(Mycontext);
  const { myst, horror, romance,drama } = context; // Get all categories from the context
  let categoryNames =tvcategory.trim().toLowerCase();
  const [popUp,setPopUp]=useState(null);
  const openPopUp =(id)=>{
 setPopUp(id);
  }
  const closePopUp =()=>{
    setPopUp(null);
  }
  

  let moviesToDisplay = [];
  if ( categoryNames === "mystery&thriller tv" || categoryNames=== "mystery thrill") {
    moviesToDisplay = [...myst];
  } else if ( categoryNames === "horror tv" || categoryNames=== "horror") {
    moviesToDisplay = [...horror];
  } else if ( categoryNames === "romance tv" ||categoryNames=== "romance") {
    moviesToDisplay = [...romance];
  }
  else if ( categoryNames ==="drama tv" ||categoryNames=== "drama"){
    moviesToDisplay=[...drama]
   
  }
  
  
 
 
  return (
 
      <div className='w-full h-auto mt-7'>
        <h1 className='md:text-3xl text-2xl p-3  md:px-4 font-bold text-white capitalize'>
          {tvcategory}
        </h1>

        {/* Display filtered movies */}
        <div className='w-full grid md:grid-cols-4 gap-4 md:gap-3  pt-4  overflow-hidden md:mt-9 movies-grid'>
          {moviesToDisplay.length > 0 ? (
            moviesToDisplay.map((item, index) => (
              <div key={item.id} className='lg:w-72 w-full flex h-full md:px-3 group relative '>
                <Link to={`/detail/${item.id}`}>
                
                  <div
                    className={`md:w-[270px] w-72 h-[160px] md:h-[160px]  hidden md:block shrink-0 group-hover:opacity-90 sm:group-hover:opacity-0 transition  rounded-md `}
                    style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                <div className='opacity-0 absolute top-[-75px]  capitalize font-bold transition duration-400 z-20  w-full hidden sm:block  scale-0 group-hover:scale-125  group-hover:translate-x-[2vw] group-hover:translate-y-[6vw] group-hover:opacity-100 '>
                <img className=' object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' src={`${item.img}`} alt="" />
                <div className='w-full'>
                <h1>{item.name}</h1>
                 

                </div>
                </div>
                  </div>
                  <div className='md:hidden w-full h-[100px] p-3 capitalize cursor-pointer flex gap-2 '>
                    <img className='w-44 h-[100px] shrink-0 rounded-lg' src={`${item.img}`} alt="" />
                    <div>
                    <h1 className='font-bold text-md w-36'>{item.name}</h1>
                    <span className='flex list-none gap-2 text-gray-500 font-semibold '>
                    <li>{item.year}</li>
                    <li>{item.time}</li>
                   
                    </span>
                    </div>
                    

                  </div>
                
                </Link>
                <div className='flex md:hidden justify-center items-center' onClick={()=>openPopUp(item.id)}>
                    <BsThreeDotsVertical size={23} />
                    </div>
                  
                   {popUp==item.id ? <PopDetail id={item.id} name={item.name} closePopUp={closePopUp} />:""} 
                
              </div>
            ))
          ) : (
            <p className='text-white'>No movies available for {tvcategory}.</p>
          )}
        </div>
      </div>
 
  );
}

export default Tvcategory