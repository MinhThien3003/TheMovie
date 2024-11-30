import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css';
import { VITE_API_KEY, VITE_BASE_URL } from '../../configs/constants';

interface MovieDetail {
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

function Chitietphim() {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(`${VITE_BASE_URL}/movie/${id}`, {
          params: { api_key: VITE_API_KEY, language: 'en-US' },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Slider + Content gộp chung */}
      <div className="relative w-full h-[650px]">
        <div className="absolute w-full h-full inset-0 shadow-inner" />
          <div className="relative w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Background Movie"
              className="w-full h-full object-cover max-w-full"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 rounded bg-black bg-opacity-35 shadow-inner blur-md" />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Poster Movie"
            className="absolute w-1/5 left-14 bottom-[-4rem] rounded-lg max-w-full"
          />
        <div className="absolute left-[30%] bottom-10 text-white w-1/2">
          <h1 className="text-7xl font-bold">{movie.title}</h1>
          <div className="flex mt-4">
            <div className="flex items-center mr-8 text-2xl">
              <i className="fa-regular fa-clock text-orange-500 mr-2" />
              <span>{movie.release_date}</span>
            </div>
            <div className="flex items-center text-2xl">
              <i className="fa-solid fa-calendar-alt text-orange-500 mr-2" />
              <span>{movie.original_language}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center text-2xl">
            <i className="fa-regular fa-star text-orange-500 mr-2" />
            <span>{movie.vote_average}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        <div className="flex ml-96">
          <button className="btn content__btn-trailer bg-white text-black py-4 px-8 border-4 border-black rounded-lg text-lg mx-4">
            Trailer
          </button>
          <Link
            to="/booking"
            className="bg-white text-black py-4 px-8 border-4 border-black rounded-lg text-lg mx-4 flex items-center">
            <i className="fa-solid fa-cart-shopping mr-4" />
            Đặt vé
          </Link>
        </div>
        <hr className="mt-12 w-11/12 h-1 bg-black rounded-lg m-auto opacity-60" />
        <div className="flex mt-6 mb-6 w-11/12 mx-auto text-gray-900 leading-10 opacity-80">
          Quốc Gia : Mỹ <br />
          Nhà sản xuất : DC Entertainment, Warner Bros <br />
          Thể Loại : Tâm Lý , Nhạc Kích <br />
          Đạo Diễn : Todd Philips <br />
          Diễn Viên : Joaquin , Lady Gaga , Zazie Beetz <br />
          Nội Dung Phim : {movie.overview} <br />
        </div>
      </div>
    </div>
  );
}

export default Chitietphim;
