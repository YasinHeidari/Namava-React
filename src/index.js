import React, { Fragment , useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes , Navigate , useParams} from "react-router-dom";
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
import { isValidMovie, isValidShow } from "./helpers/validator";
import SpinnerLoading from "./components/Loading/SpinnerLoading";
import SeeAllShows from "./components/Main/SeeAllShow";
import SeeAll from "./components/Main/SeeAll";
import Stars from "./components/Stars";

const ValidatedRoute = ({ component: Component, validator, ...rest }) => {
  const { id } = useParams();
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const validate = async () => {
      const result = await validator(id);
      setIsValid(result);
    };

    validate();
  }, [id, validator]);

  if (isValid === null) {
    return <SpinnerLoading/>; 
  }

  return isValid ? <Component {...rest} /> : <Navigate to="/error" />;
};


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header isContactUsComponent={true}/>
        <Routes>
          <Route path="/"  element={<Main/>} exact/>
          <Route path="/movie/:id" element={<ValidatedRoute component={Movie} validator={isValidMovie}/>} />
          <Route path="/show/:id" element={<ValidatedRoute component={Show} validator={isValidShow}/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/SearchMovie" element={<Search/>}/>
          <Route path="/SeeAll" element={<SeeAll/>}/>
          <Route path="/SeeAllShows" element={<SeeAllShows/>}/>
          <Route path="/stars/:id" element={<Stars/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 
