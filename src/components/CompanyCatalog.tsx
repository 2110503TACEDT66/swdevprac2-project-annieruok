import Card from "./Card"
import Link from "next/link"

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:HospitalJson}){
    const hospitalJsonReady = await hospitalsJson
    return(
        <>
            Explore {hospitalJsonReady.count} hospitals
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem._id}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgsrc={hospitalItem.picture} star={5}/>
                        </Link>))
                        
                }
            </div>
        </>
    )
}
