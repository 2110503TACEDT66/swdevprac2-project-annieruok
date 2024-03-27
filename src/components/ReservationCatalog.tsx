import Link from "next/link"
import ReservationCard from "./ReservationCard"
import { CompanyJson, ReservationItem, ReservationJson } from "../../interfaces"

export default async function ReservationCatalog({carJson}:{carJson:ReservationJson}) {
    const carJsonReady = await carJson
    return (
        <>
        {carJsonReady.count} Booking (you can't book more than 3)
        <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    carJsonReady.data.map((carItem:ReservationItem)=>(
                        <div className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">   
                            <ReservationCard rsvDate={carItem.bookDate} user={carItem._id}  restaurant={carItem.company} createdAt={carItem.createdAt} rsvID={carItem._id}/>          
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}