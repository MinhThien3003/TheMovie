import { Link } from 'react-router-dom';
import '../../assets/icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css';

interface Movie {
  poster: string;
  img: string;
  name: string;
  time: string;
  rating: string;
  description: string;
}

export function Slider({ movie }: { movie: Movie }) {
  return (
    <div className="relative w-full h-[650px]">
      <div className="absolute w-full h-full inset-0 shadow-inner" />
      <div className="relative w-full h-full">
        <img
          src={movie.poster}
          alt="Background Movie"
          className="w-full h-full object-cover max-w-full"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 rounded bg-black bg-opacity-20 shadow-inner blur-md" />
      </div>
      <img src={movie.img} alt="Poster Movie" className="absolute w-1/5 left-14 bottom-[-4rem] rounded-lg max-w-full" />
      <div className="absolute left-[30%] bottom-10 text-white w-1/2">
        <h1 className="text-7xl font-bold">{movie.name}</h1>
        <div className="flex mt-4">
          <div className="flex items-center mr-8 text-2xl">
            <i className="fa-regular fa-clock text-orange-500 mr-2" />
            <span>{movie.time}</span>
          </div>
          <div className="flex items-center text-2xl">
            <i className="fa-solid fa-calendar-alt text-orange-500 mr-2" />
            <span>03/10/2024</span>
          </div>
        </div>
        <div className="mt-8 flex items-center text-2xl">
          <i className="fa-regular fa-star text-orange-500 mr-2" />
          <span>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

export function Content({ movie }: { movie: Movie }) {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <button className="btn content__btn-trailer bg-white text-black py-4 px-8 border-4 border-black rounded-lg text-lg mx-4">
          Trailer
        </button>
        <Link to="/book-ticket" className="bg-white text-black py-4 px-8 border-4 border-black rounded-lg text-lg mx-4 flex items-center">
          <i className="fa-solid fa-cart-shopping mr-4" />
          Đặt vé
        </Link>
      </div>
      <hr className="mt-12 w-11/12 h-1 bg-white rounded-lg m-auto" />
      <div className="flex mt-12 w-11/12 mx-auto text-white leading-10 opacity-70">
        Quốc Gia : Mỹ <br />
        Nhà sản xuất : DC Entertainment, Warner Bros <br />
        Thể Loại : Tâm Lý , Nhạc Kích <br />
        Đạo Diễn : Todd Philips <br />
        Diễn Viên : Joaquin , Lady Gaga , Zazie Beetz <br />
        Nội Dung Phim : <br />
        {movie.description}
      </div>
    </div>
  );
}
