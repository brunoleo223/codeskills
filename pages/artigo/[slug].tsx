/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Image, StructuredText } from "react-datocms";
import { IPost } from "../../interfaces/Interfaces";
import { request } from  "../../lib/datocms";
import styles from "../../styles/Article.module.scss";

const PATHS_QUERY = `query {
  allArticles {
    slug
  }
}`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  })

  let paths: string[] = [];
  
  slugQuery.allArticles.map((p: IPost) => {
    paths.push(`/artigo/${p.slug}`);
  })

  return {
    paths,
    fallback: false,
  }

}

const ARTICLE_QUERY = `
query Article($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
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
        webpSrcSet
        width
        title
      }
    }
    id
    publishDate
    slug
    title
    category {
      category
    }
  }
}
`;

export const getStaticProps = async ({ params }: any) => {
  const post = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: post.article
    }
  }
}


function Slug({postData}: any) {
  return (
    <div className={styles.artigo}>
      <div className="container">
        <div className="artigo__header">
          <div className={styles.artigo__thumb}>
            <Image data={postData.coverImage.responsiveImage} />
          </div>
          <h1 className={styles.artigo__title}>{postData.title}</h1>
          <div className={styles.artigo__meta}>{postData.author.name} / {postData.category.category} / {postData.publishDate}</div>
        </div>
      </div>
      <div className="container">
        <div className={styles.artigo__content}>
          <StructuredText data={postData.content.value} />
          <div className={styles.artigo__footer}>
            <Link href="/">
              <a className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                Voltar aos artigos
              </a>
            </Link>
            <div className={styles.artigo__share}>

              {/* Facebook */}
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://codeskills.com.br/artigo/${postData.slug}/`}>
                <a target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </Link>

              {/* Twitter */}
              <Link href={`https://twitter.com/intent/tweet?text=${postData.title}&url=https://codeskills.com.br/artigo/${postData.slug}/`}>
                <a target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </Link>

              {/* Up */}
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slug