import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default async function Hospital(){
    const hospitals = await getHospitals()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
            <hr className="my-10"/>
            <h1 className="text-xl font-medium">Try client-side</h1>
            <CardPanel/>
        </main>
    )
}