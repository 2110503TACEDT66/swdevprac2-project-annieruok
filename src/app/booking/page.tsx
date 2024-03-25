'use client'
import DateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"
import { Dayjs } from "dayjs"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"

export default function Booking(){
    const urlParams = useSearchParams()
    const hid = urlParams.get('id')
    const name = urlParams.get('name')
    const dispatch = useDispatch<AppDispatch>()

    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null);
  const [bookingHospital, setBookingHospital] = useState<string>("Chula");
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingLastname, setBookingLastname] = useState<string>('');
  const [citizenId, setCitizenId] = useState<string>('');

    const createBooking = () =>{
      if(bookingLastname&&citizenId&&bookingName&&bookingDate&&bookingHospital){
        const item:BookingItem = {
          name: bookingName,
        surname: bookingLastname,
        id: citizenId,
        hospital: bookingHospital,
        bookDate: bookingDate.toString()
        }
        dispatch(addBooking(item))
      }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
    <div className="text-xl font-medium">Vaccine Booking</div>
    <div className="text-xl font-medium">Hospital {name}</div>
    <div className="w-fit space-y-2">
    <div>
        <TextField required
          id="name"
          name="Name"
          label="Name"
          defaultValue=""
          variant="standard"
          onChange={(e) => setBookingName(e.target.value)}
        />
      </div>
      <div>
        <TextField required
          id="lastname"
          name="Lastname"
          label="Lastname"
          defaultValue=""
          variant="standard"
          onChange={(e) => setBookingLastname(e.target.value)}
        />
      </div>
      <div>
        <TextField required
          id="citizen-id"
          name="Citizen ID"
          label="Citizen ID"
          defaultValue=""
          variant="standard"
          onChange={(e) => setCitizenId(e.target.value)}
        />
      </div>
        <div className="text-md text-left text-gray-600 pt-5">
            Book Date and Hospital
        </div>
        <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}} onLocationChange={(value:string)=>{setBookingHospital(value)}}/>
    </div>
    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick={createBooking}>Book Vaccine</button>

</main>

    )
}