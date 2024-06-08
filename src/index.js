import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "./font.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import  Search from "./components/SearchMovie";
import Show from "./components/Show";


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header isContactUsComponent={true}/>
        <Routes>
          <Route path="/"  element={<Main/>} exact/>
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/show/:id" element={<Show/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/SearchMovie" element={<Search/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 
