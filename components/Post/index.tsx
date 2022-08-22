import Link from "next/link";
import { IPost } from "../../interfaces/Interfaces";
import styles from './Post.module.scss';
import { Image } from "react-datocms";

interface PostProps {
    data : IPost
}

export const Post = ({ data }: PostProps) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__thumb}>
                <Link href={`artigo/${data.slug}`}>
                    <a className={styles.img}><Image data={data.coverImage.responsiveImage} className={styles.image} /></a>
                </Link>
            </div>
            <div className={styles.post__category}>{data.category.category}</div>
            <div className={styles.post__content}>
                <Link href={`artigo/${data.slug}`}>
                    <a><h2 className={styles.post__title}>{data.title}</h2></a>
                </Link>
                <p className={styles.post__description}>{data.excerpt}</p>
            </div>
        </div>
    )
}

export default Post;