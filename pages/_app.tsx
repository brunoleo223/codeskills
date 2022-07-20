import '/styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
