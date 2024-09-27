import React, { useContext, useState, useEffect } from 'react';
import Mycontext from '../context/Mycontext';
import Slider from './Slider';
import { Link } from 'react-router-dom';

function Topcontainer({ show, movies }) {
  const context = useContext(Mycontext);
  const { myst, horror, romance, drama } = context;

  // Combine movies and add a fallback for topTenMovies
  const topTenMovies = [...myst, ...horror, ...romance, ...drama].slice(0, 10);
  
  
  
  
  const [selectedMovie, setSelectedMovie] = useState(topTenMovies[0]);
  
  
  const [color, setColor] = useState(0);

  const handleMovieSelection = (movie, index) => {
    setSelectedMovie(movie);
    setColor(index);
  };

  return (
    <>
     <h1 className=' text-xl font-bold px-4 capitalize lg:hidden'>
        Top 10 {show || movies}
      </h1>
    <div className='w-full lg:h-[850px] text-white hidden lg:block'>
      <h1 className='lg:text-3xl text-xl font-bold p-4 capitalize'>
        Top 10 {show || movies}
      </h1>
      <div className='w-full lg:h-[800px] relative'>
        {/* Main background image based on selected movie */}
        {selectedMovie && (
        
          <Link to={`/detail/${selectedMovie.id}`}><div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedMovie.coverImg})` }}></div></Link>
        )}
        <div className='absolute inset-0 bg-black linergreed'></div>
        
        {/* Movie Details Section */}
        <div className="absolute top-[20%] px-8 w-[50%] h-[70%] flex flex-col justify-start">
          {selectedMovie && (
            <>
            <Link to={`/detail/${selectedMovie.id}`}>  <h1 className='text-5xl font-bold mb-4'>{selectedMovie.name}</h1></Link> 
              <p className='text-lg mb-4'>{selectedMovie.detail}</p>
              <div className='mb-4'>
                <span className='font-bold'>Genre: </span>{selectedMovie.category}
              </div>
              <div className='mb-4'>
                <span className='font-bold'>Duration: </span>{selectedMovie.time}
              </div>
              <div className='mb-4'>
                <span className='font-bold'>Rating: </span>{selectedMovie.imdb}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Section */}
        <div className='w-full h-44 lg:flex gap-10 overflow-auto hidden  overflow-y-hidden scrollWidth absolute bottom-0 items-center px-6'>
          {topTenMovies.map((item, index) => (
            <div key={item.id} className='flex w-80 h-full'>
              <div className={`w-auto text-center flex items-center justify-center text-6xl font-extrabold shrink-0 ${color === index ? "text-white" : "opacity-50"}`}>
                {index + 1}
              </div>
              <div
                onClick={() => handleMovieSelection(item, index)} // Pass the entire movie object
                className={`w-72 h-[100%] shrink-0 cursor-pointer rounded-md`}
                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
     <div className='w-full h-44 lg:hidden  flex items-center'>
     <Slider topTenMovies={topTenMovies} />
     </div>
     </>
  );
}

export default Topcontainer;
