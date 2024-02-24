import axios from 'axios';

const apiKey = 'YOUR_API_KEY'; // Replace this with your actual TMDb API key

async function searchMovies(query) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: apiKey,
                query: query
            }
        });

        
        console.log('Search results:', response.data.results);
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
}