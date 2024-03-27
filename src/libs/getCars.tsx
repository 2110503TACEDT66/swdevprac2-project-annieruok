import { resolve } from "path"

export default async function getRestaurants() {

    //await new Promise( (resolve)=>setTimeout(resolve,5000))

    const response = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/companies",)
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }
    return await response.json()
} 