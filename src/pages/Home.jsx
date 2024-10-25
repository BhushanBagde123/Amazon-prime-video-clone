import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Mycontext from '../context/Mycontext'
function Home() {
  const context =useContext(Mycontext);
  const {user}=context
  document.title ="Prime Video"
  return (
   <div>
    <div className='w-full lg:h-80 lg:flex h-[400px] lg:mt-2 flex flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 lg:h-full w-full h-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start p-4 lg:gap-8 gap-2 '>
      <h1 className='lg:text-4xl font-bold text-2xl '>Welcome to Prime Video</h1>
      <p className='lg:text-xl font-semibold text-[16px] text-center md:text-left '>join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
     {user?<button className='lg:w-80 lg:h-16 w-60 rounded-sm h-11 lg:rounded-md lg:text-xl font-semibold text-[14px] bg-blue-500 lg:font-bold capitalize'>join prime annual at rs125/month</button>:<Link to={'/login'}> <button className='lg:w-80 lg:h-12 w-44 h-9 lg:rounded-md lg:text-xl font-semibold text-[14px] bg-blue-500 lg:font-bold capitalize'>sign to join prime</button></Link>}
      </div>
      <div className=' bg-[url("https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200")] bg-center bg-cover lg:w-[60%] lg:h-[100%] w-[100%] h-[50%] '></div>

    </div>
    <div className='w-full h-[500px] lg:h-[400px] lg:flex lg:mt-56 mt-16 flex flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 lg:h-full w-full h-[50%] flex flex-col  items-center  lg:items-start p-4 lg:gap-8 gap-2'>
      <h1 className='lg:text-4xl font-semibold text-2xl '>Movie rentals on Prime Video</h1>
      <p className='lg:text-xl font-semibold text-[16px] text-center md:text-left '>Early Access to new movies, before digital subscription</p>
      <button className='lg:w-80 lg:h-12 w-40 h-9 lg:rounded-md rounded-sm lg:text-xl bg-blue-500 lg:font-bold text-[14px] font-semibold capitalize'>rent now</button>
      </div>
      <div className=' bg-[url("https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200")] bg-center bg-cover lg:w-[60%] lg:h-[100%] w-[100%] h-[50%] '></div>
      
    </div>
    <div className='w-full lg:h-[700px] bg-white text-black lg:flex flex flex-col md:flex-row md:px-2 px-8'>
      <div className='md:p-10 p-5 lg:w-[50%] w-full h-1/2 flex flex-col   md:items-start items-center md:gap-6 gap-3'>
        <h1 className='md:text-5xl md:font-bold font-bold text-3xl text-center md:text-left'>Your favorite channels all in one place</h1>
        <p className='md:text-2xl font-semibold text-lg text-center md:text-left'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
      </div>
      <div className='grid md:grid-cols-3 gap-3  grid-cols-2  md:h-full md:gap-1  p-2  md:w-[50%] w-full h-1/2 '>
        <div className=''>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img  className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
        </div>
      </div>

    </div>
   </div>
  )
}

export default Home