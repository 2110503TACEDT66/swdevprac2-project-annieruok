import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CarPanel from "@/components/CarPanel"

export default function Car() {

    const cars = getCars()

    return (
        <main className="text-center p-5 ">
            <h1 className="text-5xl font-medium p-10">Select Your Booking Sessions</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
            <CarCatalog carJson={cars}/>
            </Suspense>
        </main>
    )
}