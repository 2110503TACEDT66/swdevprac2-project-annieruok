

export default async function getHospital(id:string){
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/companies/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch the hospitals")
    }
    return await response.json()
}