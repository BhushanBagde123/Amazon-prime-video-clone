import React, { Suspense } from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { Outlet,ScrollRestoration  } from 'react-router-dom'
import Loader from '../component/Loader'

function Layout() {
  return (
    <>
        <Nav/>
        {/* scroollRestoration use to top scroll bar of next page */}
        <ScrollRestoration/>  
        <div className='main-container min-h-screen  '>
        {/* contain childern */}
        <Suspense fallback={<Loader/>}>
       <Outlet/>
       </Suspense>
        </div>
       
        <Footer/>
    </>
  )
}

export default Layout