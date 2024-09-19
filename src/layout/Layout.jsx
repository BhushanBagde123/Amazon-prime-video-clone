import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { Outlet,ScrollRestoration  } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Nav/>
        {/* scroollRestoration use to top scroll bar of next page */}
        <ScrollRestoration/>  
        <div className='main-container min-h-screen '>
        {/* contain childern */}
       <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout