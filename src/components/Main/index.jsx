import { useState, useEffect } from "react";
import HeroSectionSlider from "./HeroSectionSlider";
import SliderMovie from "./SliderMovie";
import SliderMovieTrending from "./SliderMovieTrending";
import StarsSlider from "./StarsSlider";
import DirectorsSlider from "./DirectorsSlider";
import LatestMoviesSlider from "./SliderMovieLatest";
import ScrollToTop from "../../helpers/ScrollToTop";
import SliderPoster from "./SliderPoster";
import CinemaSlider from "../CinemaSlider";
import LatestShow from "./SliderShowLatest";
import SpinnerLoading from "../Loading/SpinnerLoading";
import "./index.css";
import IranMoviesSlider from "./IranSlider";


const apiKey ='4fba95dbf46cd77d415830c228c9ef01'
export default function Main() {
    const [movies, setMovies] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        document.title = "تماشای فیلم و سریال آنلاین | نماوا";
        
        // Fetch movies data
        async function fetchMovies() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false); // Ensure loading is set to false after data is fetched
            }
        }

        // Use setTimeout for simulating loading delay
        const timer = setTimeout(() => {
            fetchMovies();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <SpinnerLoading />;
    }

    return (
        <div className="d-flex flex-column align-start justify-evenly gap-lg-8 gap-md-6 gap-sm-4 gap-xs-2 container-padding-2">
            <ScrollToTop />
            <HeroSectionSlider />
            <SliderPoster />
            <SliderMovieTrending title="ویژه" />
            <SliderMovie title="اختصاصی نماوا" movies={movies} genreId={28} />
            <SliderMovie title="رایگان در نماوا" movies={movies} genreId={12} />
            <LatestMoviesSlider title="تازه های نماوا" />
            <LatestShow title="سریال های به روز شده"/>
            <StarsSlider title="ستارگان" />
            <IranMoviesSlider title="ایرانی"/>
            <SliderMovie title="اکشن" movies={movies} genreId={28} />
            <SliderMovie title="کمدی" movies={movies} genreId={35} />
            <SliderMovie title="ترسناک" movies={movies} genreId={27} />
            <SliderMovie title="خانوادگی" movies={movies} genreId={10751} />
            <SliderMovie title="بر اساس داستان های واقعی" movies={movies} genreId={18}/>
            <SliderMovie title="جنایی" movies={movies} genreId={80} />
            <DirectorsSlider title="کارگردان" />
            <SliderMovie title="علمی تخیلی" movies={movies} genreId={878} />
            <SliderMovie title="مستند" movies={movies} genreId={99} />
            <CinemaSlider />
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

