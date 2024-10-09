import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mycontext from '../context/Mycontext';
import { Link } from 'react-router-dom';

const Genres = () => {
    const { categoryname } = useParams();
    const { getAllProducts } = useContext(Mycontext);
    const [activeSection, setActiveSection] = useState('all');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const filterItems = () => {
        return getAllProducts.filter((item) => {
            if (activeSection === 'movies') {
                return item.category.toLowerCase() === categoryname.toLowerCase() ;
            } else if (activeSection === 'tv shows') {
                return item.category.toLowerCase() === categoryname.toLowerCase() ;
            } else {
                return item.category.toLowerCase() === categoryname.toLowerCase();
            }
        });
    };

    const filteredItems = filterItems();

    return (
        <div className='w-full h-auto p-4'>
            <h1 className='capitalize font-bold text-4xl'>{categoryname}</h1> 
            <div className='w-full h-16 flex gap-6 items-center capitalize font-bold text-2xl mt-4'>
                <span 
                    onClick={() => handleSectionClick('all')} 
                    className={`${activeSection === 'all' ? 'activeClass' : ''} cursor-pointer`}
                >
                    All
                </span>
                <span 
                    onClick={() => handleSectionClick('movies')} 
                    className={`${activeSection === 'movies' ? 'activeClass' : ''} cursor-pointer`}
                >
                    Movies
                </span>
                <span 
                    onClick={() => handleSectionClick('tv shows')} 
                    className={`${activeSection === 'tv shows' ? 'activeClass' : ''} cursor-pointer`}
                >
                    TV Shows
                </span>
            </div>

            <div className='w-full h-auto grid md:grid-cols-4 gap-5 grid-cols-2  movies-grid'>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item.id} className='md:w-72 md:h-40 w-40 h-24'>
                            <Link to={`/detail/${item.id}`}>
                                <img className='w-full h-full rounded-md' src={`${item.img}`} alt={item.title} />
                            </Link>   
                        </div>
                    ))
                ) : (
                    <div className='w-[300px] flex items-center font-bold h-12 '><h1>No items found for {categoryname}</h1></div>
                )}
            </div>
        </div>
    );
};

export default Genres;
