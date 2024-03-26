export default async function postRestaurant(token:string,username:string,useradd:string,usertel:string,useropen:string) {
    const response = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/companies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: username,
            address: useradd,
            tel: usertel,
            openningtime: useropen
        }),
    })
    if(!response.ok){
        throw new Error("Cannot post Restaurant")
    }
    return await response.json()

}

