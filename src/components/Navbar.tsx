import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Navbar: React.FC = () => {
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const handleSearchClick = (): void => {
        setSearchActive(true);
    };
    const handleInputBlur = (): void => {
        setSearchActive(false);
    };

    return (
        <nav className="bg-primary relative py-1 duration-200">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src="" alt="Báo Cenima" className="w-[50px]"/>
                            Báo Cinema
                        </a>
                    </div>
                    <div className="container flex items-center w-full justify-between">
                        <div className={`gap-3 flex items-center transition-opacity duration-300 ${searchActive ? 'opacity-0' : 'opacity-100'}`}>
                            <a href="#" className="font-bold text-xl sm:text-2xl cursor-pointer hover:text-white">PHIM</a>
                            <a href="#" className="font-bold text-xl sm:text-2xl cursor-pointer hover:text-white">RẠP CHIẾU</a>
                            <a href="#" className="font-bold text-xl sm:text-2xl cursor-pointer hover:text-white">THÀNH VIÊN</a>
                            <a href="#" className="font-bold text-xl sm:text-2xl cursor-pointer hover:text-white">SỰ KIỆN</a>
                            {searchActive ? null : (
                                <MagnifyingGlassIcon 
                                onClick={handleSearchClick}
                                className="text-white bg-black w-[40px] h-[40px] rounded-full cursor-pointer"
                                />
                            )};
                        </div>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            onFocus={handleSearchClick}
                            onBlur={handleInputBlur}
                            className={`absolute left-0 right-0 mx-auto transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 bg-primary ${searchActive ? 'opacity-100 w-[500px]' : 'opacity-0 w-0'}`}
                            style={{color: searchActive ? 'black' : ''}}
                        />
                    </div>
                    <div>
                        <a onClick={() => {}} className="font-medium text-xl sm:text-2xl cursor-pointer hover:text-white">Đăng nhập/Đăng ký</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;