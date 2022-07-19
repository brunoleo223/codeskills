import Image from "next/image";
import Link from "next/link";

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
        <div className="post">
            <Link href={`post/${data.id}`}>
                <a>
                    <div className="post__thumb">
                        <Image src={data.image} width={536} height={354} alt={data.title} />
                    </div>
                    <div className="post__category">{data.category}</div>
                    <div className="post__content">
                        <h2 className="post__title">{data.title}</h2>
                        <p className="post__description">{data.description}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Post;