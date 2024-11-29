import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VITE_API_KEY, VITE_BASE_URL } from '../../configs/constants';


interface Movie_Upcoming{
    id: number;
    title: string;
    poster_path: string;
    original_language: string;
    original_title: string;
    release_date: string;
}

interface Video{
    key: string;
    type: string;
}

const MovieUpcoming: React.FC = () => {
    const [movies, setMovies] = useState<Movie_Upcoming[]>([]);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${VITE_BASE_URL}/movie/upcoming?api_key=${VITE_API_KEY}`, {
                    params: {
                        api_key: VITE_API_KEY,
                        language: 'en-US',
                        page: 1,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies', error);
            }
        };
        fetchMovies();
    }, []);

    const fetchTrailer = async (movie_id: number) => {
        try {
            const response = await axios.get(`${VITE_BASE_URL}/movie/${movie_id}/videos?api_key=${VITE_API_KEY}`);
            const videos: Video[] = response.data.results;
            const trailer = videos.find(video => video.type === 'Trailer');
            if (trailer) {
                setTrailerKey(trailer.key);
            } 
        } catch (error){
            console.error('Error fetching trailer', error);
        }
    };

  return (
    <div className="p-6">
        <h2 className=" text-black text-3xl font-bold text-center mb-8">|Phim Sắp Chiếu|</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.slice(0, 8).map((movie) => (
                <div
                    key={movie.id}
                    className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden group"
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-[330px] object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <button className="px-4 py-2 m-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500"
                                onClick={() => fetchTrailer(movie.id)}
                        >
                        Trailer
                        </button>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate w-3/4">
                            {movie.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Phát hành: {movie.release_date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        {trailerKey && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative w-[80%] h-[80%]">
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-4 py-2"
                        onClick={() => setTrailerKey(null)}
                    >
                        X
                    </button>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        )}
    </div>
  );
};

export default MovieUpcoming;
