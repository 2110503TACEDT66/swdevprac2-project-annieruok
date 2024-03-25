'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function banner(){
    const router = useRouter()

    const {data:session} = useSession()
    console.log(session?.user.token)

    return (
        <div className ={styles.banner}>
            <Image src='/img/cover.jpg' alt='cover' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-6xl text-white text-right mx-20 font-semibold font-serif'>Welcome to Online <br /> Job Fair Registration</h1>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 mx-7 my-3 rounded 
            z-30 absolute bottom-0 left-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{router.push('/company')}}>
                Select Company
            </button>
        </div>
    )
}