// import  { useState, useEffect } from 'react';

// const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

// export default function MovieGenres({ movieId }) {
//     const [genres, setGenres] = useState([]);

//     const fetchMovieGenres = async () => {
//         try {
//           const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch genres');
//           }
//           const data = await response.json();
//           setGenres(data.genres || []); // Initialize as empty array if data.genres is undefined
//         } catch (error) {
//           console.error('Error fetching genres:', error);
//         }
//       };
//     useEffect(() => {
  
//       fetchMovieGenres();
//     }, []);
  
//     async function fetchMovieDetails() {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch movie details');
//         }
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//         return null;
//       }
//     }
  
//     useEffect(() => {
//         async function getMovieGenres() {
//             try {
//               const movieDetails = await fetchMovieDetails();
//               if (!movieDetails || !genres.length) {
//                 return;
//               }
//               const genreIds = movieDetails.genre_ids || []; // Ensure genreIds is defined
//               const movieGenres = genres.filter(genre => genreIds.includes(genre.id));
//             } catch (error) {
//               console.error('Error getting movie genres:', error);
//             }
//           }
          
  
//       if (genres.length > 0) {
//         getMovieGenres();
//       }
//     }, [genres, movieId]);
  
//     return null;
// };
// import React, { useState, useEffect } from 'react';

// const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

// export default function MovieGenres({ movieId, setGenreId }) {
//     const [genres, setGenres] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchGenres() {
//             try {
//                 const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch genres');
//                 }
//                 const data = await response.json();
//                 setGenres(data.genres || []);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching genres:', error);
//             }
//         }
//         fetchGenres();
//     }, []);

//     async function fetchMovieDetails() {
//         try {
//             const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch movie details');
//             }
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('Error fetching movie details:', error);
//             return null;
//         }
//     }

//     useEffect(() => {
//         async function getMovieGenres() {
//             try {
//                 const movieDetails = await fetchMovieDetails();
//                 if (!movieDetails || !genres.length) {
//                     return;
//                 }
//                 const genreIds = movieDetails.genre_ids || []; 
//                 const matchingGenre = genres.find(genre => genreIds.includes(genre.id));
//                 if (matchingGenre) {
//                     setGenreId(matchingGenre.id);
//                 }
//             } catch (error) {
//                 console.error('Error getting movie genres:', error);
//             }
//         }
//         if (!loading) {
//             getMovieGenres();
//         }
//     }, [genres, movieId, loading, setGenreId]);

//     return null;
// }


import React, { useState, useEffect } from 'react';

const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

export default function MovieGenres({ setGenreId }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGenresId() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch genres');
                }
                const data = await response.json();
                const genreId = data.genres[0].id; 
                setGenreId(genreId);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        }
        fetchGenresId();
    }, [setGenreId ]);

    return null;
}
