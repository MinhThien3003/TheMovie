import React, { useState } from "react";
import '../assets/icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css'
import logo from '../assets/img/logo.png'

const Navbar: React.FC = () => {
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const handleSearchClick = (): void => {
        setSearchActive(true);
    };
    const handleInputBlur = (): void => {
        setSearchActive(false);
    };

    return (
        <header className="flex justify-around bg-primary rounded-xl h-16 m-4">
          <a href="">
            <img src={logo} alt="Logo" className="h-4/5 mt-2 ml-8 " />
          </a>
          <ul className="flex py-3.5 px-5 border-x-black border-x-2 border-dashed">
            <li className="list-none leading-10">
              <a href="" className="text-black text-xl font-bold uppercase opacity-70 px-10 ">
                Phim
              </a>
            </li>
            <li className="list-none leading-10">
              <a href="" className="text-black text-xl font-bold uppercase opacity-70 px-10">
                Rạp Phim
              </a>
            </li>
            <li className="list-none leading-10">
              <a href="" className="text-black text-xl font-bold uppercase opacity-70 px-10">
                Thành Viên
              </a>
            </li>
            <li className="list-none leading-10">
              <a href="" className="text-black text-xl font-bold uppercase opacity-70 px-10">
                Sự Kiện / Khuyến Mãi
              </a>
            </li>
            <li className="list-none leading-10 pr-6">
              <a href="" className="bg-black rounded-full px-3 py-2.5">
                <i className="fa-solid fa-magnifying-glass text-white" />
              </a>
            </li>
          </ul>
          {/**Login */}
          <div className="flex items-center bg-primary rounded-xl text-xl font-bold opacity-70">
            <a href="" className="p-2 border-r-2 border-black ">
              Đăng Nhập
              <i className="fa-regular fa-user px-4" />
            </a>
            <i className="fa-solid fa-ticket px-4" />
          </div>
        </header>
      );
};

export default Navbar;