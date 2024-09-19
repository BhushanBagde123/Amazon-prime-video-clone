import React,{useState,useRef} from 'react'
import { Link,} from 'react-router-dom'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

// get the props from parent
function Category({ horror=[],romance=[],mystTv=[],horrorTv=[],
  romanceTv=[],dramaTv=[],tvOne,tvTwo,tvThree,tvFour, topMovies=[],
  categoryFive, show, movies,drama=[],categoryFour, myst=[],
  categoryOne,categoryTwo,categoryThree }) {


  const scrollDiv = useRef(); //to get the div width
  const [scroll,setScroll]= useState(0);
  // for next button
  const nextButton = () => {
   setScroll( scrollDiv.current.scrollBy(950,0));
  };
  // for prvious button
  const prevButton = () => {
    setScroll(scrollDiv.current.scrollBy(-950,0));
  };

  // for dynamic name of the category
  const displayMoviesCategory =categoryOne ||categoryTwo ||categoryThree||categoryFour|| categoryFive
  const displayTvCategory =tvOne|| tvTwo || tvThree || tvFour
  
  // for dynamic info if the item
  const moviesDisplay = [...myst , ...horror ,...romance,...drama,...topMovies] // movies
  const tvShowDisplay =[...mystTv, ...horrorTv,...romanceTv,...dramaTv] // tv shows

  return (
    <div className='w-full h-64 mt-7 relative'>
      <div className='w-full flex gap-5 text-white font-bold text-xl capitalize px-6'>
        <span>{displayMoviesCategory || displayTvCategory} {typeof movies === 'string' ? movies : ''} {typeof show === 'string' ? show : ''}</span>
        {/* condition renduring  and dynamic route*/}
        {displayMoviesCategory? <Link to={{pathname:`/moviecategory/${displayMoviesCategory.toLowerCase()}`}}> 
          <span>see more</span>
        </Link>:<Link to={{pathname:`/tvshowscategory/`}}>
          <span>see more</span>
        </Link>}
       
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevButton}
        className='hidden md:flex items-center justify-center top-12 z-10 w-16 h-[70%] bg-transparent rounded-full absolute'>
        <FaArrowLeft />
      </button>
      <button
        onClick={nextButton}
        className='hidden md:flex w-16 h-[70%] right-0 top-12 justify-center z-10 rounded-full items-center bg-transparent absolute'>
        <FaArrowRight />
      </button>

      {/* Scrollable Movie Section */}
      <div ref={scrollDiv} className='w-full h-56 flex gap-7 scrollWidth overflow-x-auto  overflow-y-hidden items-center px-6'>
      {/* data of the movies and tv shows */}
     {moviesDisplay.length>0?(
          moviesDisplay.map((item, index) => (
            <div key={item.id} className='w-72 h-[80%] parent'>
              <Link to={`/detail/${item.id}`}>
                <div
                  className={`w-72 h-[80%] shrink-0 hover:scale-125 transition ease-in-out delay-150 cursor-pointer rounded-md ${index === 0 ? 'transform origin-left transition-transform duration-300 hover:scale-x-125 hover:scale-y-125' : ''}`}
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </Link>
            </div>
          ))
        ):(
          tvShowDisplay.map((item, index) => (
            <div key={item.id} className='w-72 h-[80%] parent'>
              <Link to={`/detail/${item.id}`}>
                <div
                  className={`w-72 h-[80%] shrink-0 hover:scale-125 transition ease-in-out delay-150 cursor-pointer rounded-md ${index === 0 ? 'transform origin-left transition-transform duration-300 hover:scale-x-125 hover:scale-y-125' : ''}`}
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </Link>
            </div>
          ))
        )}   
      </div>
    </div>
  );
}

export default Category;