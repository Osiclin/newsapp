import '../styles/globals.css'
import Layout from '../components/Layout'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Menu />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
