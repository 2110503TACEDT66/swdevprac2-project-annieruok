export default async function getCar(id:string) {
    const response = await fetch(`https://presentation-day-1-annieruok.vercel.app/api/v1/companies/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }
    return await response.json()
}