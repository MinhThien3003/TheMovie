import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-gray-300 bg-gray-900">
            <div className="container flex justify-between mx-auto">
                <div>
                    <h3 className="mb-4 text-xl font-bold">Thông Tin Liên Hệ</h3>
                    <p className="text-sm font-bold">Số điện thoại:</p>
                    <p className="text-sm font-bold">Email:</p>
                    <div className="flex justify-between">
                        <DiscordLogoIcon className="text-primary w-[40px] h-[40px] rounded-full cursor-pointer"/>
                        <InstagramLogoIcon className="text-primary w-[40px] h-[40px] rounded-full cursor-pointer"/>
                        <TwitterLogoIcon className="text-primary w-[40px] h-[40px] rounded-full cursor-pointer"/>
                    </div>
                </div>
                <div>
                    <h3 className="m-4 text-xl font-bold">Địa Chỉ</h3>
                    <p className="text-sm font-bold">Hỏi Thiện Ngô đi   </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;