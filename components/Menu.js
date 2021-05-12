import styles from '../styles/Menu.module.css'
import Link from 'next/link'

export default function Menu() {
    return (
        <div>
            <ul className={styles.menu}>
                <Link href='/'>
                    <a>
                        <li>Home</li>
                    </a>
                </Link>
                <Link href='/feed'>
                    <a>
                        <li>Feed</li>
                    </a>
                </Link>
                <Link href='/eom'>
                    <a>
                        <li>EOM</li>
                    </a>
                </Link>
                <Link href='/twitter'>
                    <a>
                        <li>Twitter</li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}