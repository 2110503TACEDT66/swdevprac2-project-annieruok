'use client'
import { useReducer, useRef, useEffect, useState } from "react"
import Card from "./Card"
import Link from "next/link"
import getHospitals from "@/libs/getHospitals"

export default function CardPanel(){
    const [hospitalResponse, sethospitalResponse] = useState<HospitalJson | null>(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const hospitals = await getHospitals()
            sethospitalResponse(hospitals)
        }
        fetchData()
    }, [])

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const compareReducer = (compareList: Map<string, number>, action: { type: string, hospitalName: string, rating: number }) => {
        switch(action.type) {
            case 'add': {
                if (action.rating === 0) {
                    compareList.delete(action.hospitalName)
                    return new Map(compareList)
                } else {
                    return new Map(compareList.set(action.hospitalName, action.rating))
                }
            }
            case 'remove':{
                compareList.delete(action.hospitalName)
                return new Map(compareList)
            }
            default: return compareList;
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string,number>())
    const handleRemove = (hospital: string,rating:number) => {
        dispatchCompare({ type: 'remove', hospitalName:hospital,rating})
      };
    /*
    //Mock
    const mockHospital = [
        {hid:"001",name:"Chulalongkorn Hospital",image:"/img/chula.jpg"},
        {hid:"002",name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"},
        {hid:"003",name:"Thammasat University Hospital",image:"/img/thammasat.jpg"}
    ]
    */
   if(!hospitalResponse){return (<p>Hospital list is Loading ... </p>)}


    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalResponse.data.map((hospitalItem)=>(
                        <Link href={`/company/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.id}>
                            <Card hospitalName={hospitalItem.name} imgsrc={hospitalItem.picture} star={5} onCompare={(hospital:string,rating:number) => dispatchCompare({type:'add',hospitalName:hospital,rating})} onRemove={handleRemove}/>
                        </Link>))
                        
                }
            </div>
        </div>
    )
}
