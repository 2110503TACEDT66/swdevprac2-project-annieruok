export default async function getReservation(token:string) {
    const response = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/bookings", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
    }})
        
    if(!response.ok){
        throw new Error("Failed to Reservation")
    }
    return await response.json()

}