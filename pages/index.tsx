import type { NextPage } from 'next'
import Header from '../components/Header'
import ListPosts from '../components/ListPosts'
import Menu from '../components/Menu'

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Header />
      <ListPosts />
    </>
  )
}

export default Home
