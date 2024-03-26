import getCar from "@/libs/getCar"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import reservation from "@/libs/reservation"
import { redirect } from "next/navigation"
import getReservationID from "@/libs/getReservationID"
import updateReservation from "@/libs/updateReservation"


export default async function ReservationDetailPage( {params}:{params:{rid:string}}) {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    const rsvDetail = await getReservationID(params.rid,session.user.token)

    const updateReservationf= async (addUserForm: FormData) => {
        'use server'
        try {
            const date = addUserForm.get("date") as string || "";
        if (date > "2022-05-13" || date < "2022-05-10") {
            throw new Error('Please enter a valid date between May 10, 2022, and May 13, 2022');
        }
        const regis = updateReservation(params.rid, date, session.user.token)
            redirect("/reservations")
        } catch (error) {
            console.error("Error adding reservation:", error);
            redirect('/reservations'); // Redirect to company page on error
        }
    }

    
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20 bg-white ">
            <h1 className="text-4xl text-black text-center font-mono">Edit your booking date</h1>
            <br />
            <form className="w-[100%] flex flex-col items-center space-y-4 pt-13 bg-white" action={updateReservationf}>
                    <h3 className="text-gray-700">Date must between 10-05-2022 and 13-05-2022 Otherwise, the system will not edit your reservation for you.</h3>
                    <div className="flex items-center w-1/2 my-2">
                        
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="date">
                        Date: 
                    </label>
                    <input type="date" required id="date" name="date" placeholder="YYYY-MM-DDTHH:MM:SSZ (2024-04-15T19:00:00Z)" 
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white">Update Reservation</button>
                </form>
        </main>
    )
}
