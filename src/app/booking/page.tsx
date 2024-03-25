'use client'
import React, { useState } from 'react';
import DateReserve from "@/components/DateReserve";
import { TextField, Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";

export default function Booking() {
  const startDate = dayjs('2022-05-09T17:00:00');
  const endDate = dayjs('2022-05-13T23:59:59');

  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const urlParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingHospital, setBookingHospital] = useState<string>("Chula");
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingLastname, setBookingLastname] = useState<string>('');
  const [citizenId, setCitizenId] = useState<string>('');

  const createBooking = () => {
    if (bookingLastname && citizenId && bookingName && bookingDate && bookingHospital) {
      const item = {
        name: bookingName,
        surname: bookingLastname,
        id: citizenId,
        hospital: bookingHospital,
        bookDate: bookingDate.toString(),
      };
      dispatch(addBooking(item));
    }
  };

  return (
    <main className="w-full flex flex-col items-center space-y-4 my-10">
      <div className="text-2xl font-medium text-blue-800">Appointment Booking</div>
      <div className="text-xl font-medium text-blue-600">company {urlParams.get('name')}</div>
      <div className="space-y-2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <TextField
          required
          id="name"
          name="Name"
          label="Name"
          defaultValue=""
          variant="outlined"
          onChange={(e) => setBookingName(e.target.value)}
          className="w-full"
        />
        <TextField
          required
          id="lastname"
          name="Lastname"
          label="Lastname"
          defaultValue=""
          variant="outlined"
          onChange={(e) => setBookingLastname(e.target.value)}
          className="w-full"
        />
        <TextField
          required
          id="citizen-id"
          name="Citizen ID"
          label="Citizen ID"
          defaultValue=""
          variant="outlined"
          onChange={(e) => setCitizenId(e.target.value)}
          className="w-full"
        />
        <div className="text-md text-left text-gray-600 pt-5">
          Book Date and Company
        </div>
        <DateReserve onDateChange={setBookingDate} onLocationChange={setBookingHospital} />
        <Button
          variant="contained"
          color="primary"
          className="w-full mt-4"
          onClick={() => {
            if (!bookingDate || bookingDate.isBefore(startDate) || bookingDate.isAfter(endDate)) {
              alert('Please select a date between May 10th and May 13th, 2022.');
              return;
            }
            if (hospitalItems.length >= 3) {
              alert('Cannot book more than three appointments');
              return;
            }
            createBooking();
          }}
        >
          Book Appointment
        </Button>
      </div>
    </main>
  );
}
