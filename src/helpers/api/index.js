import axios from 'axios';

const apiKey = 'api_key=4fba95dbf46cd77d415830c228c9ef01'; 
const baseUrl = 'https://api.themoviedb.org/3';
export const apiUrl = baseUrl + '/discover/movie?sort_by?popularity.desc&' + apiKey;
const restApi = '/discover/movie?sort_by?popularity.desc&';

export const img_300 ="https://image.tmdb.org/t/p/w300";
export const unavailable ="https://www.movienewz.com/img/films/poster-holder.jpg";