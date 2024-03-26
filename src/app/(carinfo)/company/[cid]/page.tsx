import getCar from "@/libs/getCar"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import reservation from "@/libs/reservation"
import { redirect } from "next/navigation"




export default async function CarDetailPage( {params}:{params:{cid:string}}) {

    const carDetail = await getCar(params.cid)
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    const addReservation = async (addUserForm: FormData) => {
        'use server'
        
          // Proceed with reservation if the date is valid
        try {
            const date = addUserForm.get("date") as string || "";
        if (date <= "2022-05-13" || date >= "2022-05-10") {
            const regis = await reservation(date, profile.data._id, params.cid, session.user.token)
            redirect("/reservations")
        }
           
        } catch (error) {
            console.error("Error adding reservation:", error);
            redirect("/reservations"); // Redirect to company page on error
        }
    }
    

    
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20 bg-white ">
            <h1 className="text-5xl font-medium">{carDetail.data.name}</h1>
            <div className="space-x-10  w-fit px-10 py-5 flex flex-row justify-center bg-orange-100 rounded-full">
                <div className="text-md mx-5">Website :{ carDetail.data.website }</div>
                <div className="text-md mx-5">Tel :{ carDetail.data.tel}</div>
                <div className="text-md mx-5">{ carDetail.data.openningtime}</div>
            </div>
            <form className="w-[100%] flex flex-col items-center space-y-4 pt-13 bg-white" action={addReservation}>
                <div className="text-xl p-2">Booker: {profile.data.name}</div>
                <h3 className="text-gray-700">Date must between 10-05-2022 and 13-05-2022 Otherwise, the system will not make your reservation for you.</h3>
                    <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="date">
                        Date: 
                    </label>
                    <input type="date" required id="date" name="date" placeholder="YYYY-MM-DDTHH:MM:SSZ (2024-04-15T19:00:00Z)" 
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white">Make Reservation</button>
                </form>
        </main>
    )
}
