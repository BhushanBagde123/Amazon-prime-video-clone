import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Mycontext from '../context/Mycontext';

function Moviecategory() {
  const { category } = useParams(); // Get the category from the URL parameter
  const context = useContext(Mycontext);
  const { myst, horror, romance,drama } = context; // Get all categories from the context
  let categoryNames =category.trim().toLowerCase();

  let moviesToDisplay = [];
  if ( categoryNames === "mystery&thriller movies" || categoryNames=== "mystery thrill") {
    moviesToDisplay = [...myst];
  } else if ( categoryNames === "horror movies" || categoryNames=== "horror") {
    moviesToDisplay = [...horror];
  } else if ( categoryNames === "romance movies" ||categoryNames=== "romance") {
    moviesToDisplay = [...romance];
  }
  else if ( categoryNames ==="drama movies" ||categoryNames=== "drama"){
    moviesToDisplay=[...drama]
  }
  else if (categoryNames ==="top movies"){
    moviesToDisplay = [...horror];
  }
 console.log( moviesToDisplay)
 
  return (
 
      <div className='w-full h-auto mt-7'>
        <h1 className='text-3xl p-3 font-bold text-white capitalize'>
          {category}
        </h1>

        {/* Display filtered movies */}
        <div className='w-full grid grid-cols-4 gap-5 p-3 pt-4 overflow-hidden mt-9 movies-grid'>
          {moviesToDisplay.length > 0 ? (
            moviesToDisplay.map((item, index) => (
              <div key={item.id} className='w-72 h-full parent'>
                <Link to={`/detail/${item.id}`}>
                  <div
                    className={`w-72 h-[150px] shrink-0 hover:scale-125 transition ease-in-out delay-150 cursor-pointer rounded-md ${index === 0 ? 'transform origin-left transition-transform duration-300 hover:scale-x-125 hover:scale-y-125' : ''}`}
                    style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p className='text-white'>No movies available for {category}.</p>
          )}
        </div>
      </div>
 
  );
}

export default Moviecategory;
