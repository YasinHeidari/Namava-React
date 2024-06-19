import { useState, useEffect } from 'react';

const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

export default function MovieGenres({ setGenreId }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGenresId() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
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
