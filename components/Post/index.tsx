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
            <Link href={`post/${data.id}`}>
                <a>
                    <div className={styles.post__thumb}>
                        <Image src={data.image} width={400} height={400} alt={data.title} />
                    </div>
                    <div className={styles.post__category}>{data.category}</div>
                    <div className={styles.post__content}>
                        <h2 className={styles.post__title}>{data.title}</h2>
                        <p className={styles.post__description}>{data.description}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Post;