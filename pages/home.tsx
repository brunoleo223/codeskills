import type { NextPage } from 'next'
import Header from '../components/Header'
import ListPosts from '../components/ListPosts'
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `query {
    allArticles {
    title
    author {
        name
    }
    content {
        value
    }
    coverImage {
        url
    }
    excerpt
    id
    publishDate
    slug
    }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data }
  };
}

interface HomeProps {
  data: {
    allArticles: any
  }
}

const Home: NextPage<HomeProps> = ( props ) => {
  return (
    <>
      <Header />
      <ListPosts posts={props.data.allArticles} />
    </>
  )
}

export default Home
