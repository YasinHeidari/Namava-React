import axios from 'axios';

const apiKey = 'api_key=4fba95dbf46cd77d415830c228c9ef01'; 
const baseUrl = 'https://api.themoviedb.org/3';
export const apiUrl = baseUrl + '/discover/movie?sort_by?popularity.desc&' + apiKey;
const restApi = '/discover/movie?sort_by?popularity.desc&';

export const img_300 ="https://image.tmdb.org/t/p/w300";
export const unavailable ="https://www.movienewz.com/img/films/poster-holder.jpg";



/*export function MovieUrl(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);

    })
}
MovieUrl(apiUrl);*/

/*export async function searchMovies(query) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: apiKey,
                query: query
            }
        });

        // Return the search results
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
}*/