export default async function getReservationID(id:string,token:string) {
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/bookings/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
    }})
        
    if(!response.ok){
        throw new Error("Failed to getReservation")
    }
    return await response.json()

}