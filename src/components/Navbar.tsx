import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css";
import logo from "../assets/img/logo.png";
import { VITE_API_KEY, VITE_BASE_URL } from '../configs/constants';

const Navbar: React.FC = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Lưu từ khóa tìm kiếm
  const [movies, setMovies] = useState<any[]>([]); // Lưu kết quả tìm kiếm
  const location = useLocation(); // Sử dụng useLocation để theo dõi URL
  const handleSearchClick = (): void => {
    // Nếu đang mở tìm kiếm, khi click thì đóng và xóa nội dung trong ô tìm kiếm và kết quả tìm kiếm
    if (searchActive) {
      setSearchTerm(""); // Xóa nội dung khi đóng tìm kiếm
      setMovies([]); // Xóa kết quả tìm kiếm khi đóng thanh tìm kiếm
    }
    setSearchActive(!searchActive); // Bật/tắt trạng thái tìm kiếm
  };

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      try {
        // Thay đổi URL dưới đây với API của bạn để tìm kiếm theo tên phim
        const response = await axios.get(`${VITE_BASE_URL}/search/movie`, {
          params: {
            api_key: VITE_API_KEY,
            query: term, // Tìm kiếm theo từ khóa
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data.results); // Cập nhật danh sách phim tìm được
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    } else {
      setMovies([]); // Xóa kết quả nếu không có từ khóa tìm kiếm
    }
  };

  // Đóng thanh tìm kiếm nếu URL thay đổi và hiện tại đang ở trang chi tiết phim
  useEffect(() => {
    if (location.pathname.startsWith("/chitietphim")) {
      setSearchActive(false); // Đóng tìm kiếm khi chuyển đến trang chi tiết phim
      setSearchTerm(""); // Xóa nội dung tìm kiếm khi chuyển đến trang chi tiết phim
      setMovies([]); // Xóa kết quả tìm kiếm khi chuyển đến trang chi tiết phim
    }
  }, [location]); // Theo dõi thay đổi URL

  return (
    <>
      {/* Thanh điều hướng */}
      <header className="flex justify-around bg-primary rounded-xl h-16 m-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-4/5 mt-2 ml-8" />
        </Link>
        <ul className="flex py-3.5 px-5 border-x-black border-x-2 border-dashed">
          <li className="list-none leading-10">
            <Link
              to="/movies"
              className="text-black text-xl font-bold uppercase opacity-70 px-10"
            >
              Phim
            </Link>
          </li>
          <li className="list-none leading-10">
            <Link
              to="/cinemas"
              className="text-black text-xl font-bold uppercase opacity-70 px-10"
            >
              Rạp Phim
            </Link>
          </li>
          <li className="list-none leading-10">
            <Link
              to="/members"
              className="text-black text-xl font-bold uppercase opacity-70 px-10"
            >
              Thành Viên
            </Link>
          </li>
          <li className="list-none leading-10">
            <Link
              to="/events"
              className="text-black text-xl font-bold uppercase opacity-70 px-10"
            >
              Sự Kiện / Khuyến Mãi
            </Link>
          </li>
          {/* Nút Tìm kiếm */}
          <li className="list-none leading-tight pr-6 relative">
            <div className="relative">
              <button
                className="bg-black rounded-full px-3 py-2.5"
                onClick={handleSearchClick}
              >
                <i className="fa-solid fa-magnifying-glass text-white" />
              </button>
              {searchActive && (
                <div
                  className="absolute top-full left-0 bg-white border rounded-lg shadow-lg mt-2 p-4 z-10"
                  style={{ minWidth: "400px" }}
                >
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    value={searchTerm}
                    onChange={handleSearchChange} // Cập nhật khi người dùng nhập
                    autoFocus
                  />
                  {/* Hiển thị danh sách phim tìm được */}
                  {movies.length > 0 && (
                    <div className="mt-4 max-h-80 overflow-y-auto">
                      {movies.map((movie: any) => (
                        <Link
                          key={movie.id}
                          to={`/chitietphim/${movie.id}`} // Điều hướng đến trang chi tiết phim
                          className="flex items-center py-2"
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                            alt={movie.title}
                            className="w-16 h-24 mr-4"
                          />
                          <span className="text-sm">{movie.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        </ul>
        {/* Đăng nhập */}
        <div className="flex items-center bg-primary rounded-xl text-xl font-bold opacity-70">
          <Link to="/login" className="p-2 border-r-2 border-black">
            Đăng Nhập
            <i className="fa-regular fa-user px-4" />
          </Link>
          <i className="fa-solid fa-ticket px-4" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
