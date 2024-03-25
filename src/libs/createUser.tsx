
export default async function userReg(userEmail:string, userPassword: string, userName:string, userTel:string){
    const response = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/auth/register" , {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        tel: userTel,
        name: userName,
        role: "user"
    })
    })
    if(!response.ok){
        throw new Error("Failed to log-in")
    }
    return await response.json()
}
