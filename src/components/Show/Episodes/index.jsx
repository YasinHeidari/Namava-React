import React, { useEffect, useState } from 'react';

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Episode({ seriesId , showName }) {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/${seriesId}/season/1?api_key=${apiKey}&language=en-US`
                );
                const data = await response.json();
                setEpisodes(data.episodes);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching episodes:", error);
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [seriesId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='d-flex flex-wrap gap-1  align-center'>
            {episodes.map((episode) => (
                <div key={episode.id} className='col-3' style={{ marginBottom: '1rem' }}>
                    {episode.still_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${episode.still_path}`}
                            alt={episode.name}
                            className='max-w-100 border-radius-4'
                        />
                    )}
                    <div className='d-flex justify-start align-center gap-1'>
                        <h2 className='white-color font-lg-14 font-weight-normal' style={{lineHeight: '1.79'}}>{showName} -</h2>
                        <p className=' white-color'>قسمت {episode.episode_number}</p>
                        <p className=' white-color'>فصل {episode.season_number}</p>
                    </div>
                    <p className=' white-color '>{episode.overview}</p>
                    <p className=' white-color '>Vote Average: {episode.vote_average}</p>
                    <p className=' white-color '>Vote Count: {episode.vote_count}</p>
                </div>
            ))}
        </div>
    );
}
