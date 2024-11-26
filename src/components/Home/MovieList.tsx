import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'aa0901ê75416743b86c673a77d61026';
const BASE_URL = 'https://api.themoviedb.org/3';

interface Movie{
    id: number;
    title: string;
    poster_path: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}
const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`, {
                    params: {
                        api_key: API_KEY,
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
  return (
    <div className="p-4">
        <h2 className="text-black text-3xl font-bold text-center mb-6">Phim Đang Chiếu</h2>
        <div className="gird gap-6 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-80 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {movie.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
};

export default MovieList;
