'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function Banner(){
    const covers = ['/img/projcover.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()

    const {data: session} = useSession()
    console.log(session)

    return (
        <div className={styles.banner} onClick={()=>{ setIndex(index+1)}}>
            <Image src={covers[index%1]} alt='cover' fill={true} priority objectFit='cover' />
            <div className={styles.bannerText}>
                <h1 className='text-8xl font-serif text-white font-bold'> Welcome to</h1>
                <h1 className='text-8xl font-serif text-white font-bold'> Job-Fair</h1>
            </div>
            

        </div>

    );
}