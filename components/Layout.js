import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Menu from '../components/Menu'

export default function Layout({children}) {
    return(
        <div>
            <Head>
                <title>News App</title>
                <meta name="description" content="NewsApp brings you top stories and news in sports, business, economy and so on." />
                <meta name="keywords" content="news, sports news, economy news, business news." />
                <meta name="author" content="Osita Ezeigbo" />
            </Head>
            <div className={styles.container}>
            <div className={styles.nav}>
                <h2 className={styles.logo}>NewsApp</h2>
                <Menu />
            </div>
            { children }
            </div>
        </div>
    )
}