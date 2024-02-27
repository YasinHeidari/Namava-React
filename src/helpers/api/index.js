import axios from 'axios';

const apiKey = '4fba95dbf46cd77d415830c228c9ef01'; // Replace this with your actual TMDb API key

export default async function ApiUrlBase(query) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/', {
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