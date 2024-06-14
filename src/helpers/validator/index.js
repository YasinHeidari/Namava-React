// src/utils/validators.js

const API_KEY = '4fba95dbf46cd77d415830c228c9ef01'; // Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

const isValidIdFormat = (id) => {
    return /^[0-9]+$/.test(id);
  };
  
  export const isValidMovie = async (id) => {
    if (!isValidIdFormat(id)) {
      return false;
    }
  
    try {
      const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error validating movie:', error);
      return false;
    }
  };
  
  export const isValidShow = async (id) => {
    if (!isValidIdFormat(id)) {
      return false;
    }
  
    try {
      const response = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error validating show:', error);
      return false;
    }
  };
