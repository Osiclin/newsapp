import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
    return(
        <div>
            <Head>
                <title>News App</title>
                <meta name="description" content="news app" />
            </Head>
            <div className={styles.container}>
            <h2 className={styles.logo}>NewsApp</h2>
            { children }
            </div>
        </div>
    )
}