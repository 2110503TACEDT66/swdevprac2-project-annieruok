"use client"
import { removeReservation } from "@/redux/features/cartSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart() {

    const carItem = useAppSelector((state)=> state.cartSlice.carItem)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
        {
            carItem.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.carID}>
                    <div className="text-xl">{reservationItem.carModel}</div>
                    <div className="text-xl">Pick-up {reservationItem.pickupDate}
                    from {reservationItem.pickupLocation}</div>
                    <div className="text-xl">Return {reservationItem.returnDate}
                    to {reservationItem.retrunLocation}</div>
                    <div className="text-xl">Duration: {reservationItem.numOfDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white"
                    onClick={()=>dispatch(removeReservation(reservationItem))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}