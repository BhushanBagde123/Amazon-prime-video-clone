import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tvshow from './pages/Tvshow';
import Liveshow from './pages/Liveshow';
import Moviecategory from './pages/Moviecategory';
import Categorypage from './pages/Categorypage';
import Detail from './pages/Detail';
import Vedio from './pages/vedio';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mystate from './context/Mystate';
import Addmovies from './pages/Addmovies';
import Tvcategory from './pages/Tvcategory';
import Layout from './layout/Layout';
import Wishlist from './pages/Wishlist';
import Addtvshows from './pages/Addtvshow';
import Search from './pages/Search';

// Create the router object
const router = createBrowserRouter([
  {
  element:<Layout/>,
   
 
  children:[
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/tvshows/',
    element: <Tvshow />,
  },
  {
    path: '/liveshow',
    element: <Liveshow />,
  },
  {
    path: '/moviecategory/:category',
    element: <Moviecategory />,
  },
  {
    path: '/category',
    element: <Categorypage />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  
 
  {
    path: '/addmovie',
    element: <Addmovies />,
  },
  {
    path: '/addtvshows',
    element: <Addtvshows />,
  },
  {
    path: '/tvshowscategory/:tvcategory',
    element: <Tvcategory />,
  },
  {
    path:'/mystuff',
    element:<Wishlist/>,
  }
]
},
{
  path: '/login',
  element: <Login />,
},
{
  path: '/signup',
  element: <Signup />,
},
{
  path: '/video/:id',
  element: <Vedio />,
},{
  path:'/search',
  element:<Search/>,
}
]);

function App() {
  return (
    <Mystate>
      <RouterProvider router={router} />
    </Mystate>
  );
}

export default App;
