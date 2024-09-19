import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-28  text-white flex flex-col justify-center items-center mt-5'>
        <div><img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="logo" /></div>
        <div className='flex gap-4'>
          <ul className='text-blue-600 font-bold flex gap-2'>
          <li>Terms and Privacy Notice</li>
          <li>Send us feedback</li>
          <li>Help</li>
          </ul>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
    </footer>
  )
}

export default Footer