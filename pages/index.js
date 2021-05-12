import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.hometext}>
      <div className={styles.newsapp}>
        <h1><span className={styles.nextjs}>Next.js</span> NewsApp</h1>
        <svg className={styles.svg} viewBox="30 40 140 110"  xmlns="http://www.w3.org/2000/svg">
        <path fill="#F2F4F8" d="M67.3,-21.4C74.6,0.6,59.2,30.4,38.6,43C18,55.5,-7.7,50.8,-30.1,35.9C-52.4,20.9,-71.3,-4.2,-65.8,-23.8C-60.2,-43.4,-30.1,-57.5,-0.1,-57.5C30,-57.5,60,-43.3,67.3,-21.4Z" transform="translate(100 100)" />
      </svg>
      </div>
        <p>Your one stop shop for the latest news articles</p>
      </main>

    </div>
  )
}
