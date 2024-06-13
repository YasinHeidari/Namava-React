const getResponsiveBackgroundImageShow = (series) => {
    const width = window.innerWidth;
    if(width < 768){
        return `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 135vw),  url(https://media.themoviedb.org/t/p/original/${series.backdrop_path})`;
    }else if (width < 992) {
        return `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),  url(https://media.themoviedb.org/t/p/original/${series.backdrop_path})`;
    } else {
        return ` radial-gradient(circle at 33% 40%, transparent 20%, #1a1a1a 75%),linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%), url(https://media.themoviedb.org/t/p/original/${series.backdrop_path})`;
    }
};

export default getResponsiveBackgroundImageShow;