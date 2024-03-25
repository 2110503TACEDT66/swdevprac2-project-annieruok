import Image from "next/image"
import getHospital from "@/libs/getHospital"
import Link from "next/link"

export default async function HospitalDetailPage({params}:{params:{hid:string}}){
    const hospitalDetail = await getHospital(params.hid)
    //Mock
    /*
    const mockHospital = new Map()
        mockHospital.set("001",{name:"Chulalongkorn Hospital",image:"/img/chula.jpg"})
        mockHospital.set("002",{name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"})
        mockHospital.set("003",{name:"Thammasat University Hospital",image:"/img/thammasat.jpg"})
    */
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture} alt="Hospital Picture" width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"/>
                <div className="text-md mx-5 text-left">
                <div>address: {hospitalDetail.data.address}</div>
                <div>district: {hospitalDetail.data.district}</div>
                <div>province: {hospitalDetail.data.province}</div>
                <div>postalcode: {hospitalDetail.data.postalcode}</div>
                <div>tel: {hospitalDetail.data.tel}</div>
                <div>__v: {hospitalDetail.data.__v}</div>
                <div>id: {hospitalDetail.data.id}</div>
                <Link href={`/reservations?id=${params.hid}&model=${hospitalDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
                    Book Vaccine
                    </button>
                </Link>

                </div>
            </div>
        </main>
    )
}