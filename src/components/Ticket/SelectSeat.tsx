    import React, { useState } from "react";
    const seatPrices: { [key in 'regular' | 'vip' | 'couple']: number } = {
        regular: 50000,
        vip: 75000,
        couple: 120000,
    };

    interface Seat {
        seatNumber: number;
        type: 'regular' | 'vip' | 'couple';
    }

    interface SelectSeatProps {
        onSelectSeats: (seats: Seat[], totalPrice: number) => void;
        onBack: () => void;
    }

    const SelectSeat: React.FC<SelectSeatProps> = ({ onSelectSeats, onBack }) => {
        const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
        const [totalPrice, setTotalPrice] = useState<number>(0);

        const toggleSeatSelection = (seatNumber: number, type: 'regular' | 'vip' | 'couple') => {
            const existingIndex = selectedSeats.findIndex((seat) => seat.seatNumber === seatNumber);

            if (existingIndex >= 0) {
                const updatedSeats = [...selectedSeats];
                updatedSeats.splice(existingIndex, 1);
                setSelectedSeats(updatedSeats);
                setTotalPrice(totalPrice - seatPrices[type]);
            } else {
                const newSeat = { seatNumber, type };
                setSelectedSeats([...selectedSeats, newSeat]);
                setTotalPrice(totalPrice + seatPrices[type]);
            }
        };

        const handleProceed = () => {
            onSelectSeats(selectedSeats, totalPrice);
        };

        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Chọn Ghế</h2>
                <div className="grid grid-cols-8 gap-2 justify-center">
                    {[...Array(5 * 8)].map((_, index) => {
                        const seatNumber = index + 1;
                        const seatType =
                            index % 10 === 0 ? "couple" : index % 5 === 0 ? "vip" : "regular"; // Quy ước loại ghế
                        return (
                            <button
                                key={index}
                                className={`w-12 h-12 rounded-lg border border-gray-300 ${
                                    seatType === "regular" ? "bg-gray-200" : seatType === "vip" ? "bg-yellow-400" : "bg-red-400"
                                } ${selectedSeats.some((seat) => seat.seatNumber === seatNumber) ? "border-4 border-green-500" : ""}`}
                                onClick={() => toggleSeatSelection(seatNumber, seatType)}
                            >
                                {seatNumber}
                            </button>
                        );
                    })}
                </div>
                <p className="text-xl font-semibold">Tổng tiền: {totalPrice} VND</p>
                <div className="space-x-4">
                    <button onClick={onBack} className="p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                        Quay lại
                    </button>
                    <button onClick={handleProceed} className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Xác nhận ghế
                    </button>
                </div>
            </div>
        );
    };

    export default SelectSeat;
