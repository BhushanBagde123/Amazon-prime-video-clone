import React, { useContext, useEffect, useState } from 'react';
import Mycontext from '../context/Mycontext';

function Wishlist() {
  document.title = "Prime Video | My Stuff";
  const { like, user } = useContext(Mycontext);
  const [wishlist, setWishlist] = useState([]);

  // Load the user and their wishlist from localStorage when component mounts
  useEffect(() => {
  
    
    if (user && user.wishlist) {
      setWishlist(user.wishlist);  // Set the user's wishlist
    }
  }, []);

  // Function to check if the movie already exists in the wishlist
  const isMovieInWishlist = (movie) => {
    return wishlist.some(item => item.id === movie.id);  // Check by movie id or another unique property
  };

  // Add liked movies to the wishlist and save to localStorage
  useEffect(() => {
    if (like.length > 0) {
      

      if (user) {
        // Filter out movies that are already in the wishlist
        const newMovies = like.filter(movie => !isMovieInWishlist(movie));

        if (newMovies.length > 0) {
          const updatedWishlist = [...wishlist, ...newMovies];

          user.wishlist = updatedWishlist;  // Update user's wishlist
          setWishlist(updatedWishlist);

          // Save updated user data back to localStorage
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    }
  }, [like]); // Update whenever the 'like' array changes

  return (
    <>
      <div className='w-full h-auto p-5 mt-5'>
        <div className='w-full text-white font-bold text-3xl capitalize py-2'>
          <h1>My Stuff</h1>
        </div>
        <div className='text-2xl capitalize w-full font-bold flex gap-3 py-2'>
          <h5>Watchlist - Movies</h5>
        </div>

        <div className='w-full h-full  py-1 lg:mt-4 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-3'>
          {wishlist.length > 0 ? (
            wishlist.map((item, id) => (
              <div key={id} className='cursor-pointer group lg:relative md:w-[270px]  '>
                <img
                  className='md:w-[270px]  w-44 h-28 md:h-[100%] rounded-md lg:group-hover:opacity-0'
                  src={item.img}
                  alt=""
                />
                <div className='hidden lg:block lg:opacity-0 group-hover:opacity-100 absolute top-[-75px] scale-110 transition duration-400 z-20 group-hover:translate-x-[2vw] group-hover:translate-y-[4vw]'>
                  <img
                    className='object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
                    src={item.img}
                    alt=""
                  />
                  <div className='w-full font-bold capitalize bg-black'>
                    <h1>{item.name}</h1>
                  </div>
                </div>

                <h1 className='font-bold capitalize md:hidden'>
                  {item.name.length >= 18 ? item.name.substring(0, 18) + "..." : item.name}
                </h1>
              </div>
            ))
          ) : (
            <h1 className='font-bold text-xl capitalize md:text-3xl'>No item</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
