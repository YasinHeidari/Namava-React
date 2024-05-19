import { useState, useEffect } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import SliderMovie from "../SliderMovieHomePage";
import SliderMovieTrending from "../SliderMovieHomePageTrending";
import StarsSlider from "../StarsSlider";
import DirectorsSlider from "../DirectorsSlider";
import LatestMoviesSlider from "../SliderMovieHomePageLatest";
import ScrollToTop from "../../helpers/ScrollToTop";
import "./main.css"

export default function Main() {
     const [movies, setMovies] = useState([]);
     

   useEffect(() => {
      //Fetch movies data
     async function fetchMovies() {
       try {
         const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4fba95dbf46cd77d415830c228c9ef01');
         const data = await response.json();
         setMovies(data.results);
       } catch (error) {
         console.error('Error fetching movies:', error);
       }
     }

     fetchMovies();
   }, []);
   
    return (
        
            <div className="d-flex flex-column align-start justify-evenly gap-8 container-padding-2">
            <ScrollToTop/>
                <HeroSectionSlider/> 
                <SliderMovieTrending title="ویژه" />
                <SliderMovie title="اختصاصی نماوا" movies={movies} genreId={28} />
                <SliderMovie title="رایگان در نماوا" movies={movies} genreId={12} />
                <LatestMoviesSlider title="تازه های نماوا"/>
                {/* {<SliderMovie title="سریال های ایرانی" movies={movies} genreId={28} />} */}
                <StarsSlider title="ستارگان"/> 
                {/* {<SliderMovie title="ایرانی" movies={movies} genreId={28} />} */}
                <SliderMovie title="اکشن" movies={movies} genreId={28} />
                
                <SliderMovie title="کمدی" movies={movies} genreId={35} />
                <SliderMovie title="ترسناک" movies={movies} genreId={27} />
                <SliderMovie title="خانوادگی" movies={movies} genreId={10751} />
                <SliderMovie title="بر اساس داستان های واقعی" movies={movies} genreId={18} />
                <SliderMovie title="جنایی" movies={movies} genreId={80} />
                <DirectorsSlider  title="کارگردان" /> 
                <SliderMovie title="علمی تخیلی" movies={movies} genreId={878} />
                <SliderMovie title="مستند" movies={movies} genreId={99} />
                {/* {<SliderMovie title="قصه پریان" movies={movies} genreId={28} />} */}
                <SliderMovie title="مهیج" movies={movies} genreId={53} />
                <SliderMovie title="عاشقانه" movies={movies} genreId={10749} />
                <SliderMovie title="وسترن" movies={movies} genreId={37} />
                <SliderMovie title="رازآلود" movies={movies} genreId={9648} />
                <SliderMovie title="ورزشی" movies={movies} genreId={53} />
                <SliderMovie title="فانتزی" movies={movies} genreId={14} />
                <SliderMovie title="ویژه ناشنوایان" movies={movies} genreId={10770} /> 
                <SliderMovie title="فیلم کوتاه" movies={movies} genreId={10752} /> 
                <SliderMovie title="فیلم تئاتر" movies={10770} genreId={10770} />
            </div>
        
    );
}
