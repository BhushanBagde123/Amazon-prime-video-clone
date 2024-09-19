import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { fireDb } from '../firebase/Firebase';

function Addmovies() {
    const [data, setData] = useState({
        name: "",
        img: "",
        coverImg: "",
        video: "",
        category: "",
        year: "",
        time: "",
        imdb: "",
        detail:'',
    });

    const addmovies = async(e) => {
        e.preventDefault();
        try {
            const movies = collection(fireDb,'movies');
            await addDoc(movies,data)
        } catch (error) {
            console.log(error.message)
        }
        // Add logic to handle movie submission (e.g., send to a backend)
    };

    return (
        <form onSubmit={addmovies} className='w-full h-screen bg-white text-black'>
            <div>
                <label>Movie Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
            </div>
            <div>
                <label>Movie Image</label>
                <input
                    type="url"
                    value={data.img}
                    onChange={(e) => setData({ ...data, img: e.target.value })}
                />
            </div>
            <div>
                <label>Cover Image</label>
                <input
                    type="url"
                    value={data.coverImg}
                    onChange={(e) => setData({ ...data, coverImg: e.target.value })}
                />
            </div>
            <div>
                <label>Video</label>
                <input
                    type="url"
                    value={data.video}
                    onChange={(e) => setData({ ...data, video: e.target.value })}
                />
            </div>
            <div>
                <label>Category</label>
                <select
                    value={data.category}
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                >
                    <option value="horror">Horror</option>
                    <option value="drama">Drama</option>
                    <option value="mystery thrill">Mystery Thriller</option>
                    <option value="romance">Romance</option>
                    <option value="top movies">Top Movies</option>
                </select>
            </div>
            <div>
                <label>Year</label>
                <input
                    type="number"
                    value={data.year}
                    onChange={(e) => setData({ ...data, year: e.target.value })}
                />
            </div>
            <div>
                <label>Time</label>
                <input
                    type="text"
                    value={data.time}
                    onChange={(e) => setData({ ...data, time: e.target.value })}
                />
            </div>
            <div>
                <label>IMDb</label>
                <input
                    type="number"
                    step="0.1"
                    value={data.imdb}
                    onChange={(e) => setData({ ...data, imdb: e.target.value })}
                />
            </div>
            <div>
                <label >detail</label>
                <input type="text" onChange={(e)=>{
                    setData({...data,detail:e.target.value})
                }} />
            </div>
            <button type="submit">submit</button>
        </form>
    );
}

export default Addmovies;
