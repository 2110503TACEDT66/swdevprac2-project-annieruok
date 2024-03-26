
import Banner from '@/components/Banner'
import { TravelCard } from "@/components/TravelCard";
import CarCatalog from '@/components/CarCatalog';
import getCars from "@/libs/getCars"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import ImageRotator from '@/components/ads'


export default function Home() {
  const cars = getCars()
  return (
    <main>
      <Banner/>
      <div className='p-10'>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
              <CarCatalog carJson={cars}/>
            </Suspense>
      </div>
      <ImageRotator/>
      
    </main>
  );
}
