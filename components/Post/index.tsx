import Image from "next/image";
import Link from "next/link";
import styles from './Post.module.scss';

interface PostProps {
    data : {
        id: number;
        title: string;
        description: string;
        image: string;
        category: string;
    }
}

export const Post = ({ data }: PostProps) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__thumb}>
                <Link href={`post/${data.id}`}>
                    <a className={styles.img}><Image src={data.image} layout="fill" className={styles.image} alt={data.title} /></a>
                </Link>
            </div>
            <div className={styles.post__category}>{data.category}</div>
            <div className={styles.post__content}>
                <Link href={`post/${data.id}`}>
                    <a><h2 className={styles.post__title}>{data.title}</h2></a>
                </Link>
                <p className={styles.post__description}>{data.description}</p>
            </div>
        </div>
    )
}

export default Post;