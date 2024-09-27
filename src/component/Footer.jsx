import React from 'react'

function Footer() {
  return (
    <footer className='w-full lg:h-28 h-16  text-white flex flex-col justify-center items-center lg:mt-5 '>
        <div><img className='w-12 lg:w-24' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="logo" /></div>
        <div className='flex flex-col justify-center items-center  lg:felx lg:gap-4 gap-2'>
          <ul className='text-blue-600 font-bold flex text-[8px] lg:text-[16px] gap-2 '>
          <li>Terms and Privacy Notice</li>
          <li>Send us feedback</li>
          <li>Help</li>
          </ul>
          <p className='text-[8px] lg:text-[16px]'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
    </footer>
  )
}

export default Footer