import Link from "next/link"
import ProductCard from "./ProductCard"
import { CompanyItem, CompanyJson } from "../../interfaces"

export default async function CarCatalog({carJson}:{carJson:CompanyJson}) {
    const carJsonReady = await carJson
    return (
        <>
        {carJsonReady.count} Companies
        <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    carJsonReady.data.map((carItem:CompanyItem)=>(
                        <Link href={`/company/${carItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                            <ProductCard carName={carItem.name} imgSrc={"/img/joblogo.jpg"}  tel={carItem.tel} openningtime={carItem.description}/>
                        </Link>
                       
                    ))
                }
                
            </div>
        </>
    )
}