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
export default function Home({ data }) {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}