import type { NextPage } from 'next'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Header />
    </>
  )
}

export default Home
