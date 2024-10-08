import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Mycontext from '../context/Mycontext'
function Home() {
  const context =useContext(Mycontext);
  const {user}=context
  return (
   <div>
    <div className='w-full lg:h-80 lg:flex h-[400px] lg:mt-2 flex flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 lg:h-full w-full h-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start p-4 lg:gap-8 gap-2 '>
      <h1 className='lg:text-4xl font-simbold text-2xl '>Welcome to Prime Video</h1>
      <p className='lg:text-xl font-semibold text-[16px] text-center md:text-left '>join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
     {user?<button className='lg:w-80 lg:h-16 w-40 h-9 lg:rounded-md lg:text-xl font-semibold text-[8px] bg-blue-500 lg:font-bold capitalize'>join prime annual at rs125/month</button>:<Link to={'/login'}> <button className='lg:w-80 lg:h-12 w-40 h-7 lg:rounded-md lg:text-xl font-semibold text-[8px] bg-blue-500 lg:font-bold capitalize'>sign to join prime</button></Link>}
      </div>
      <div className=' bg-[url("https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200")] bg-center bg-cover lg:w-[60%] lg:h-[100%] w-[100%] h-[50%] '></div>

    </div>
    <div className='w-full h-[500px] lg:h-[400px] lg:flex lg:mt-56 mt-16 flex flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 lg:h-full w-full h-[50%] flex flex-col  items-center  lg:items-start p-4 lg:gap-8 gap-2'>
      <h1 className='lg:text-4xl font-semibold text-2xl '>Movie rentals on Prime Video</h1>
      <p className='lg:text-xl font-semibold text-[16px] text-center md:text-left '>Early Access to new movies, before digital subscription</p>
      <button className='lg:w-80 lg:h-12 w-40 h-7 lg:rounded-md lg:text-xl bg-blue-500 lg:font-bold text-[8px] font-semibold capitalize'>rent now</button>
      </div>
      <div className=' bg-[url("https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200")] bg-center bg-cover lg:w-[60%] lg:h-[100%] w-[100%] h-[50%] '></div>
      
    </div>
    <div className='w-full lg:h-[700px] bg-white text-black lg:flex flex flex-col lg:flex-row lg:px-2 px-8'>
      <div className='lg:p-10 p-5 lg:w-[50%] w-full h-1/2 flex flex-col   lg:items-start items-center lg:gap-6 gap-3'>
        <h1 className='lg:text-5xl lg:font-bold font-semibold text-[15px]'>Your favorite channels all in one place</h1>
        <p className='lg:text-2xl font-semibold text-[9px]'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
      </div>
      <div className='grid grid-cols-3 gap-2 lg:gap-1  p-3 px-6 lg:w-[50%] w-full h-1/2'>
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