'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function banner(){
    const cover = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const {data:session} = useSession()
    console.log(session?.user.token)

    return (
        <div className ={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={cover[index%4]} alt='cover' fill={true} priority objectFit='contain'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-bold'>Vaccine Service Center</h1>
                <h2 className='text-xl font-serif'>Let's get vaccinated! Save yourself, Save your beloved</h2>
            </div>

            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Hello {session.user?.name}</div>:null
            }

            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded 
            z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                Select Hospital
            </button>
        </div>
    )
}