import React,{useState,useRef} from 'react'
import { Link,} from 'react-router-dom'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

// get the props from parent
function Category({ horror=[],romance=[],mystTv=[],horrorTv=[],
  romanceTv=[],dramaTv=[],tvOne,tvTwo,tvThree,tvFour, topMovies=[],
  categoryFive, show, movies,drama=[],categoryFour, myst=[],topImdb=[],
  categoryOne,categoryTwo,categoryThree,categorySix }) {


  const scrollDiv = useRef(); //to get the div width
  const [scroll,setScroll]= useState(0);
  // for next button
  const nextButton = () => {
   setScroll( scrollDiv.current.scrollBy(1200,0));
  };
  // for prvious button
  const prevButton = () => {
    setScroll(scrollDiv.current.scrollBy(-1200,0));
  };

  // for dynamic name of the category
  const displayMoviesCategory =categoryOne ||categoryTwo ||categoryThree||categoryFour|| categoryFive|| categorySix
  const displayTvCategory =tvOne|| tvTwo || tvThree || tvFour
  
  // for dynamic info if the item
  const moviesDisplay = [...myst , ...horror ,...romance,...drama,...topMovies,...topImdb] // movies
  const tvShowDisplay =[...mystTv, ...horrorTv,...romanceTv,...dramaTv] // tv shows

  return (
    <div className='w-full lg:h-64 h-44 lg:mt-7 relative '>
      <div className='w-full flex gap-5 text-white font-bold lg:text-xl capitalize px-6'>
        <span>{displayMoviesCategory || displayTvCategory} {typeof movies === 'string' ? movies : ''} {typeof show === 'string' ? show : ''}</span>
        {/* condition renduring  and dynamic route*/}
        {displayMoviesCategory? <Link to={{pathname:`/moviecategory/${displayMoviesCategory.toLowerCase()}`}}> 
          <span aria-label={`movies${displayMoviesCategory}`}>see more</span>
        </Link>:<Link to={{pathname:`/tvshowscategory/${displayTvCategory.toLowerCase()}`}}>
          <span aria-label={`tvshows${displayTvCategory}`}>see more</span>
        </Link>}
       
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevButton}
        className='hidden md:flex items-center justify-center top-12 z-30 w-16 h-[70%] bg-transparent rounded-full absolute'>
        <FaArrowLeft />
      </button>
      <button
        onClick={nextButton}
        className='hidden md:flex w-16 h-[70%] right-0 top-12 justify-center z-30 rounded-full items-center bg-transparent absolute'>
        <FaArrowRight />
      </button>

      {/* Scrollable Movie Section */}
      <div ref={scrollDiv} className='w-full lg:h-56 overflow-x-auto overflow-y-hidden  h-44 flex gap-7 scrollWidth  relative items-center px-6'>
      {/* data of the movies and tv shows */}
     {moviesDisplay.length>0?(
          moviesDisplay.map((item, index) => (
            <div key={item.id} className='w-72 h-[160px] group  lg:h-[80%] relative '>
              <Link to={`/detail/${item.id}`}>
                <div
                  className={`md:w-[270px] w-[210px] h-[110px] md:h-[80%] shrink-0 group-hover:opacity-90 sm:group-hover:opacity-0 transition cursor-pointer rounded-md `}
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' } } aria-label='moviesImages'
                />
                <div className='opacity-0 absolute top-[-75px]  capitalize font-bold transition duration-400 z-20  overflow-visible w-full hidden sm:block  scale-0 group-hover:scale-125  group-hover:translate-x-[2vw] group-hover:translate-y-[6vw] group-hover:opacity-100 '>
                <img className=' object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' src={`${item.img}`} alt="images"  aria-label='moviesImages' />
                <div className='w-full'>
                  <h1>{item.name}</h1>
                 

                </div>
                </div>
              </Link>
              
            </div>
          ))
        ):(
          tvShowDisplay.map((item) => (
            <div key={item.id} className='w-72 h-[160px] group lg:h-[80%] relative'>
              <Link to={`/detail/${item.id}`}>
                <div
                  className={`md:w-[270px] w-[210px] h-[110px] md:h-[80%]  shrink-0 group-hover:opacity-90 sm:group-hover:opacity-0 transition cursor-pointer rounded-md `}
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  aria-label='tvShowImages'
                />
                <div className='opacity-0 absolute top-[-75px]  capitalize font-bold transition duration-400 z-20  overflow-visible w-full hidden sm:block  scale-0 group-hover:scale-125  group-hover:translate-x-[2vw] group-hover:translate-y-[6vw] group-hover:opacity-100 '>
                <img className=' object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' src={`${item.img}`} alt="images"  aria-label='tvShowImages' />
                <div className='w-full'>
                  <h1>{item.name}</h1>
                 

                </div>
                </div>
              </Link>
            </div>
          ))
        )}   
      </div>
    </div>
  );
}

export default Category;