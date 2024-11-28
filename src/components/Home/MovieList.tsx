import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VITE_API_KEY, VITE_BASE_URL } from '../../configs/constants';
import { Link } from 'react-router-dom';

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
                const response = await axios.get(`${VITE_BASE_URL}/discover/movie?api_key=${VITE_API_KEY}`, {
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
  return (
    <div className="p-6">
        <h2 className="text-black text-3xl font-bold text-center mb-8">Phim Đang Chiếu</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.slice(0, 8).map((movie) => (
                <div
                    key={movie.id}
                    className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden group"
                    >
                    <Link key={movie.id} to={`/chitietphim/${movie.id}`}>  {/* Tạo liên kết với ctp bằng id */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-[330px] object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <button className="px-4 py-2 m-2 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-500">
                        Mua Vé
                        </button>
                        <button className="px-4 py-2 m-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500">
                        Trailer
                        </button>
                    </div>
                    </Link>
                    <div className="mt-4 flex justify-end">
                        <div className="absolute bottom-4 right-4 bg-primary text-white text-sm px-2 py-1 rounded-md flex items-center">
                            <span className="mr-1 text-lg">★</span>
                            {movie.vote_average.toFixed(1)}
                        </div>
                    </div>
                    
                    <div className="p-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate w-3/4">
                            {movie.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
            <div className="mt-8 text-center">
                    <Link to="/movies">
                        <button className="bg-primary hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
                            Xem thêm
                        </button>
                    </Link>
            </div>
    </div>
  );
};

export default MovieList;