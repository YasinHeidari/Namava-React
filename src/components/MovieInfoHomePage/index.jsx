import { Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";

export default function MovieInfoHomePage(){
    return(
        <div className="container">
            <div className="movieInfoContainer d-flex flex-column justify-center align-start container-padding-2 ">
                <Link >{}</Link>
                <div className=" w-100 h-100 d-flex  justify-evenly align-start gap-2">
                    <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">{ratingDecimal(movie.vote_average)}</p></div>
                    <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
                    <div className="d-flex justify-center align-center">
                        <p className="white-color font-12">فیلم - {movie.release_date ? movie.release_date.substring(0, 4) : 'Release Date Not Available'}</p>
                    </div>
                </div>
                <p>{}</p>
                <div className="d-flex justify-evenly align-center gap-2">
                    
                </div>
            </div>
        </div>
    )
}