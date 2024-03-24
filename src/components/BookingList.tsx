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
          <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.id}>
            <div className="text-xl">Name: {bookingItem.name}</div>
            <div className="text-xl">Surname: {bookingItem.surname}</div>
            <div className="text-xl">Citizen ID: {bookingItem.id}</div>
            <div className="text-xl">Hospital: {bookingItem.hospital}</div>
            <div className="text-xl">Book Date: {bookingItem.bookDate}</div>
            <button
              className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
              onClick={() => dispatch(removeBooking(bookingItem.id))}
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </>
    );
  }
  