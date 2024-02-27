import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "./font.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Error from "./components/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" exact component={<Main/>} />
          <Route path="/MovieList" component={<MovieList/>} />
          <Route path="/Movie/:id" component={<Movie/>} />
          <Route path="*" component={<Error/>} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
/*import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./font.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Error from "./components/Error";

const main = createBrowserRouter([ 
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/MovieList",
        element: <MovieList />,
    },
    {
        path: "/Movie/:id", //check if its correct
        element: <Movie />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Fragment>
        <Header />
        <RouterProvider router={main} />
        <Footer />
    </Fragment>
);

reportWebVitals();*/