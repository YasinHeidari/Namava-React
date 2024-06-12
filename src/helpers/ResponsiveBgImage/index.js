const getResponsiveBackgroundImage = (movie) => {
    const width = window.innerWidth;

    if (width < 576) {
        return `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 135vw), url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`;
    } else {
        return `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%), url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`;
    }
};

export default getResponsiveBackgroundImage;