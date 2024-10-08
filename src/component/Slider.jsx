import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed

const Slider = ({ moviesDisplay,topTenMovies}) => { 
    const scrollDiv = useRef(null); // To reference the scrollable div
   

    // Function to scroll to the next set of items
    const nextButton = () => {
        if (scrollDiv.current) {
            scrollDiv.current.scrollBy(1200,0);
        }
    };

    // Function to scroll to the previous set of items
    const prevButton = () => {
        if (scrollDiv.current) {
            scrollDiv.current.scrollBy(-1200,0);
        }
    };

    return (
        <div className='relative w-full h-64'>
            <button
                onClick={prevButton}
                className='hidden md:flex items-center justify-center  left-0 top-4 z-30 w-16 h-[70%] bg-transparent rounded-full absolute'>
                <FaArrowLeft />
            </button>
            <button
                onClick={nextButton}
                className='hidden md:flex w-16 h-[70%] right-0 top-4 justify-center z-30 rounded-full items-center bg-transparent absolute'>
                <FaArrowRight />
            </button>

            {/* Scrollable Movie Section */}
            <div ref={scrollDiv} className='w-full h-56 flex gap-7 overflow-x-auto overflow-y-hidden scrollWidth items-center md:px-4 px-6'>
                {moviesDisplay && moviesDisplay.map((item, index) => (
                    <div key={item.id} className='w-72 h-[80%] group relative'>
                        <Link to={`/detail/${item.id}`}>
                            <div
                                className={`md:w-[270px] w-[210px] h-[110px] md:h-[80%]  shrink-0 group-hover:opacity-90 sm:group-hover:opacity-0 transition cursor-pointer rounded-md`}
                                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            />
                            <div className='opacity-0 absolute top-[-75px]  capitalize font-bold transition duration-400 z-20  overflow-visible w-full hidden sm:block  scale-0 group-hover:scale-125  group-hover:translate-x-[2vw] group-hover:translate-y-[6vw] group-hover:opacity-100 '>
                <img className=' object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' src={`${item.img}`} alt="" />
                <div className='w-full'>
                  <h1>{item.name}</h1>
                 

                </div>
                </div>
                        </Link>
                    </div>
                ))}
                {topTenMovies && topTenMovies.map((item, index) => (
  <div key={item.id} className='flex w-96 h-[80%] mt-8  items-center'>
    <Link to={`/detail/${item.id}`}>

    <div className={`w-auto text-center flex items-center justify-center text-6xl font-extrabold shrink-0 text-white`}>
      {index + 1}
    </div>
    </Link>
    <div
      className={`md:w-[270px]  w-[210px] h-[110px] md:h-[80%]  shrink-0 cursor-pointer rounded-md`}
      style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
      
     
  
  
  </div>
))}

                
            </div>
        </div>
    );
};

export default Slider;
