export default async function reservation(userrsvDate:string, userid:string, userrestaurant:string,token:string) {
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/companies/${userrestaurant}/bookings/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookDate: userrsvDate,
            user: userid
        }),
    })
    if(!response.ok){
        throw new Error("Failed to Reservation")
    }
    return await response.json()

}