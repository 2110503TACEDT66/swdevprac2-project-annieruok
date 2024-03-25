import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import getReservation from "@/libs/getBooking"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import ReservationCatalog from "@/components/CompanyCatalog"


export default async function myReservation() {

    
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    const myReser = await getReservation(session.user.token)

    
    return (
        <main className="w-full text-center p-5">
            <h1 className="text-5xl font-medium p-10">Your Booking Sessions</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <ReservationCatalog hospitalsJson={myReser}/>
            </Suspense>

        </main>
    )
}
