import styles from './topmenu.module.css'
import Link from 'next/link'

export default function TopMenuItem({title,pageref}:{title:string,pageref:string}){
    return (
        <Link className={styles.itemcontainer} href={pageref} >
            {title}
        </Link>
    )
}

