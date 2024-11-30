import React from "react";

const mockShowtimes = [
    { id: 1, movie: "Moana 2", time: "10:00 AM" },
    { id: 2, movie: "Venom: The Last Dance", time: "1:00 PM" },
    { id: 3, movie: "Smile 2", time: "4:00 PM" },
    { id: 4, movie: "The Wild Robot", time:"5:00 PM" },
    { id: 5, movie: "Wicked", time:"5:00 PM" },
    { id: 6, movie: "Gladiator II", time:"5:00 PM" },
    { id: 7, movie: "Terrifier 3", time:"5:00 PM" },
    { id: 8, movie: "Matka", time:"5:00 PM" }
];

interface SelectShowtimeProps {
    onSelectShowtime: (showtime: any) => void;
}
const SelectShowtime: React.FC<SelectShowtimeProps> = ({ onSelectShowtime }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Chọn Suất Chiếu</h2>
            <div className="space-y-4">
                {mockShowtimes.map((showtime) => (
                <button
                key={showtime.id}
                className="w-full p-4 text-lg bg-transparent text-black border border-gray-300 rounded-md hover:bg-green-500 hover:text-white transition"
                onClick={() => onSelectShowtime(showtime)}
            >
                {showtime.movie} - {showtime.time}
            </button>
                           
                ))}
            </div>
        </div>
    );
};

export default SelectShowtime;
