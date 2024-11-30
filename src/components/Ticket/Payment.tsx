import React from "react";

interface PaymentProps {
  selectedShowtime: any;
  selectedSeats: { type: 'regular' | 'vip' | 'couple'; seat: string }[];
  onBack: () => void;
}

const Payment: React.FC<PaymentProps> = ({
  selectedShowtime,
  selectedSeats,
  onBack,
}) => {
  const seatPrices: { regular: number; vip: number; couple: number } = {
    regular: 50000,
    vip: 80000,
    couple: 120000,
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce(
      (total, seat) => total + seatPrices[seat.type],
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Hoá Đơn Thanh Toán
      </h2>
      <div className="border-b border-gray-300 pb-4 mb-4">
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Phim:</span> {selectedShowtime.movie}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Thời gian:</span>{" "}
          {selectedShowtime.time}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Chi tiết ghế:
        </h3>
        <ul className="space-y-2">
          {selectedSeats.map((seat, index) => (
            <li
              key={index}
              className="flex justify-between text-gray-600 border-b pb-2"
            >
              <span>
                Ghế: {seat.seat} ({seat.type})
              </span>
              <span>
                {seatPrices[seat.type].toLocaleString("vi-VN")} đ
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
        <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
        <span className="text-lg font-bold text-green-500">
          {totalPrice.toLocaleString("vi-VN")} đ
        </span>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          className="px-4 py-2 bg-transparent border border-gray-500 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
          onClick={onBack}
        >
          Quay lại
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Payment;
