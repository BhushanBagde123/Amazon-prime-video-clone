import React, { useContext, useState } from 'react'
import Mycontext from "../context/Mycontext"
import { Link } from 'react-router-dom';

const Search = () => {
    const {getAllProducts} =useContext(Mycontext);
   
    const [filter,setFilter]=useState([]);
    const searchElement =(e)=>{
        const name =e.target.value;
        const value= getAllProducts.filter((p)=>p.name.toLowerCase().includes(name.toLowerCase()));
        setFilter(value);
        

    }
  return (
    <div>
        <div className='w-full h-16 p-4  flex justify-center items-center'>
            <input className='w-[80%] h-full text-black p-1 ' type="text" placeholder='search' onChange={searchElement} />
        </div>
        <div className='w-full h-auto  flex flex-col justify-center items-center'>
            {filter.map((movies,)=>{
                return (
                    <>
                    <div className='flex w-1/2 items-center overflow-auto'>
                    <Link to={`/detail/${movies.id}`}>
                    <h1 className='p-1 capitalize'>{movies.name}</h1>
                    </Link>
                    </div>
                    </>
                )
            })}

        </div>
    </div>
  )
}

export default Search