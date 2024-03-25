export default async function createBooking(userBookDate:string, userid:string, usercompany:string,token:string) {
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/companies/${usercompany}/bookings/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            bookDate: userBookDate,
            user: userid
        }),
    })
    if(!response.ok){
        throw new Error("Failed to Book")
    }
    return await response.json()

}