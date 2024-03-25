"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList() {
    const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
  
    if (hospitalItems.length === 0) {
      return <div className="text-center py-10">No Vaccine Booking</div>;
    }
  
    return (
      <>
        {hospitalItems.map((bookingItem: BookingItem) => (
          <div className="bg-slate-900 shadow-lg shadow-slate-500/50 rounded px-5 mx-5 py-2 my-2" key={bookingItem.id}>
            <div className="text-xl font-mono text-white ">Name: {bookingItem.name}</div>
            <div className="text-xl font-mono text-white">Surname: {bookingItem.surname}</div>
            <div className="text-xl font-mono text-white">Citizen ID: {bookingItem.id}</div>
            <div className="text-xl font-mono text-white">Hospital: {bookingItem.hospital}</div>
            <div className="text-xl font-mono text-white">Book Date: {bookingItem.bookDate}</div>
            <button
              className="block rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 text-blue-700 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:text-white px-3 py-1 shadow-sm font-semibold font-mono my-3"
              onClick={() => dispatch(removeBooking(bookingItem.id))}
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </>
    );
  }
  