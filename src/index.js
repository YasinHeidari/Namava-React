import React, { Fragment, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import "./index.css";
import "./font.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Search from "./components/SearchMovie";
import Show from "./components/Show";
import { isValidMovie, isValidShow } from "./helpers/validator";
import SpinnerLoading from "./components/Loading/SpinnerLoading";
import SeeAllShows from "./components/Main/SeeAllShow";
import SeeAll from "./components/Main/SeeAll";
import Stars from "./components/Stars";
import FAQ from "./components/FAQ";
import TermsAndConditions from "./components/Terms&Conditions";
import Internet from "./components/Internet";
import Applications from "./components/Applications";
import Subscription from "./components/Subscription";

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
    return <SpinnerLoading />;
  }

  return isValid ? <Component {...rest} /> : <Navigate to="/error" />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Fragment>
      <Header isContactUsComponent={true} />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route
          path="/movie/:id"
          element={
            <ValidatedRoute component={Movie} validator={isValidMovie} />
          }
        />
        <Route
          path="/show/:id"
          element={<ValidatedRoute component={Show} validator={isValidShow} />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SearchMovie" element={<Search />} />
        <Route path="/SeeAll" element={<SeeAll />} />
        <Route path="/SeeAllShows" element={<SeeAllShows />} />
        <Route path="/stars/:id" element={<Stars />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        <Route path="/internet" element={<Internet/>} />
        <Route path="/app" element={<Applications/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  </BrowserRouter>
);
