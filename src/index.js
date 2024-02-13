import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './font.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Error from './components/Error'


const main = createBrowserRouter([
  {
      path: "/",
      element: <Main/>,
  },
  {
      path: "/MovieList",
      element: <MovieList/>,
  },
  {
      path: "/Movie/:id", //check if its correct 
      element: <Movie/>,
  },
  {
      path: "*",
      element: <Error/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Header/>
    <RouterProvider router={main}/>
    <Footer/>
  </Fragment>
);
