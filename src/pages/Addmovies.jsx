import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { fireDb } from '../firebase/Firebase'; // Your Firestore instance
import { fireStorage } from '../firebase/Firebase'; // Your Firebase Storage instance

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
        detail: "",
    });
    const [videoFile, setVideoFile] = useState(null); // State to store the video file

    const addmovies = async (e) => {
        e.preventDefault();
        try {
            const moviesCollection = collection(fireDb, 'movies');
            
            // Upload video file to Firebase Storage if videoFile is selected
            let videoUrl = '';
            if (videoFile) {
                const storageRef = ref(fireStorage, `movies/videos/${videoFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, videoFile);

                await new Promise((resolve, reject) => {
                    uploadTask.on('state_changed', 
                        (snapshot) => {
                            // You can track upload progress here if needed
                        }, 
                        (error) => reject(error), 
                        () => {
                            // Get the download URL after the upload is complete
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                videoUrl = downloadURL;
                                resolve();
                            });
                        }
                    );
                });
            }

            // Add video URL to the data object
            const movieData = { ...data, video: videoUrl };

            // Add the movie data to Firestore
            await addDoc(moviesCollection, movieData);
            console.log("Movie added successfully!");
        } catch (error) {
            console.log(error.message);
        }
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
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files[0])}
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
                    <option value="comedy">Comedy</option>
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
                <label>Detail</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setData({ ...data, detail: e.target.value });
                    }}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Addmovies;
