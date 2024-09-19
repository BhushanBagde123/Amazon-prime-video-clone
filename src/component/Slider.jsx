import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed

const Slider = ({ moviesDisplay }) => { 
    const scrollDiv = useRef(null); // To reference the scrollable div
   

    // Function to scroll to the next set of items
    const nextButton = () => {
        if (scrollDiv.current) {
            scrollDiv.current.scrollBy(950,0);
        }
    };

    // Function to scroll to the previous set of items
    const prevButton = () => {
        if (scrollDiv.current) {
            scrollDiv.current.scrollBy(-950,0);
        }
    };

    return (
        <div className='relative w-full h-64'>
            <button
                onClick={prevButton}
                className='hidden md:flex items-center justify-center top-6 z-10 w-16 h-[70%] bg-transparent rounded-full absolute'>
                <FaArrowLeft />
            </button>
            <button
                onClick={nextButton}
                className='hidden md:flex w-16 h-[70%] right-0 top-6 justify-center z-10 rounded-full items-center bg-transparent absolute'>
                <FaArrowRight />
            </button>

            {/* Scrollable Movie Section */}
            <div ref={scrollDiv} className='w-full h-56 flex gap-7 overflow-x-auto overflow-y-hidden scrollWidth items-center px-6'>
                {moviesDisplay && moviesDisplay.map((item, index) => (
                    <div key={item.id} className='w-72 h-[80%]'>
                        <Link to={`/detail/${item.id}`}>
                            <div
                                className={`w-72 h-[80%] shrink-0 hover:scale-110 transition ease-in-out delay-150 cursor-pointer rounded-md ${index === 0 ? 'transform origin-left transition-transform duration-300 hover:scale-110' : ''}`}
                                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
