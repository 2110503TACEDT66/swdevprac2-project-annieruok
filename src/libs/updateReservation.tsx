export default async function updateReservation(reservationID:string,userrsvDate:string,token:string) {
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/bookings/${reservationID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookDate: userrsvDate

        }),
    })
    if(!response.ok){
        throw new Error("Failed to UpdateReservation")
    }
    return await response.json()

}