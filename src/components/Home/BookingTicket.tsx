import React, { useState } from "react";
import SelectShowtime from "../Ticket/SelectShowtime";
import SelectSeat from "../Ticket/SelectSeat";
import Payment from "../Ticket/Payment";

interface Seat {
  seatNumber: number;
  type: string;
}

const BookingTicket: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedShowtime, setSelectedShowtime] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleShowtimeSelection = (showtime: any) => {
    setSelectedShowtime(showtime);
    setStep(2);
  };

  const handleSeatSelection = (seats: Seat[]) => {
    setSelectedSeats(seats);
    setStep(3);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="p-6">
      {step === 1 && <SelectShowtime onSelectShowtime={handleShowtimeSelection} />}
      {step === 2 && (
        <SelectSeat
          onSelectSeats={handleSeatSelection}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <Payment
          selectedShowtime={selectedShowtime}
          selectedSeats={selectedSeats.map((seat) => ({
            seat: `Ghế ${seat.seatNumber}`,
            type: seat.type as "regular" | "vip" | "couple",
          }))}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default BookingTicket;
