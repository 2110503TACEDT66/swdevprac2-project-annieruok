
import Banner from '@/components/Banner'
import CarCatalog from '@/components/CarCatalog';
import getCars from "@/libs/getCars"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import ImageRotator from '@/components/ads'
import { CompanyJson } from '../../interfaces';


export default async function Home() {
  const cars:CompanyJson = await getCars()
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
