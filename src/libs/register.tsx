export default async function register(username:string, usertelephonenumber:string, useremail:string, userpassword:string) {
    const response = await fetch("https://presentation-day-1-annieruok.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: username,
            telephonenumber: usertelephonenumber,
            email: useremail,
            password: userpassword,
            role: "user"
        }),
    })
    if(!response.ok){
        throw new Error("Failed to Register")
    }
    return await response.json()

}