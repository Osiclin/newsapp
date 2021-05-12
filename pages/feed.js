import styles from '../styles/Feed.module.css'
import Image from 'next/image'

export default function Feed({ articles }) {
    // useEffect(() => {
    //     let mounted = true;

    //     fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=56f9e1e1169a46cda3b6386a0e92ba52')
    //     .then(res => res.json())
    //     .then(data => {
    //         if (mounted) {
    //             setNews(data.articles)
    //             console.log(news)
    //             setLoading(false)
    //         }
    //     })
    //     .catch(err => console.log(err))
        
    //     return () => mounted = false;
    // }, [])

    return(
        <main className={styles.main}>
            {articles.map((article, index) => 
                <div className={styles.card} key={index}>
                    <a href={article.url}>
                        <h3 className={styles.title}>{article.title}</h3>
                    </a>
                    <p className={styles.author}>Author: {article.author}</p>
                    <p className={styles.details}>{article.description}<a href="#" className={styles.readmore}>Read more</a></p>
                    <Image src={article.urlToImage} layout="intrinsic" width={530} height={300} loading="eager"/>
                    <p className={styles.source}>Source: {article.source.name}</p>
                </div>
            )
            }
            <div className={styles.page}>
                <a href="#" className={styles.paginate}>previous</a>  #<span>1</span>  <a href="#" className={styles.paginate}>next</a>
            </div>
        </main>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=56f9e1e1169a46cda3b6386a0e92ba52')
    const data = await res.json()

    return{
        props: {
            articles: data.articles
        }
    }
}