import type { NextPage } from 'next'
import Header from '../components/Header'
import ListPosts from '../components/ListPosts'
import { IPost } from '../interfaces/Interfaces';
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
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    excerpt
    id
    publishDate
    slug
    category {
        category
      }
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
    allArticles: IPost[]
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
