import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.hometext}>
        <h1><span className={styles.nextjs}>Next.js</span> NewsApp</h1>
        <p>Your one stop shop for the latest news articles</p>
      </main>

    </div>
  )
}
