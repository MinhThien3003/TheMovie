import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css";
import logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const handleSearchClick = (): void => {
    setSearchActive(!searchActive); // Bật/tắt trạng thái tìm kiếm
  };

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
                  style={{ minWidth: "400px" }}>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    autoFocus
                  />
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
