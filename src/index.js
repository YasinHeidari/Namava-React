import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "./font.css";
import BlackNavbar from "";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import  SearchMovie from "./components/SearchMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes>
        {/* maybe component instead of element */}
          <Route path="/"  element={<Main/>} exact/>
          <Route path="/MovieList" element={<MovieList/>} />
          <Route path="/Movie/:id" element={<Movie/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/SearchMovie" element={<SearchMovie/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 
