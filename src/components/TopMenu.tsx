import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            {
                session? 
                <Link href={"/api/auth/signout"}>
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-200 text-sm font-semibold'>Sign-out {session.user?.name}</div>
                    </Link>
                :<Link href={"/api/auth/signin"}>
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-200 text-sm font-semibold'>Sign-in</div>
                    </Link>
            }
            <TopMenuItem title='My Booking' pageref='/mybooking'/>
            <TopMenuItem title='Booking' pageref='/booking'/>
            <TopMenuItem title='Sign-up' pageref='/api/auth/register'/>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='Logo' width={0} height={0} sizes='100vh'/>
        </div>
    )
}