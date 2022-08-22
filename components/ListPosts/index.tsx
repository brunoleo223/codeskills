import Link from "next/link";
import { IPost } from "../../interfaces/Interfaces";
import Post from "../Post";
import Promo from "../Promo";
import styles from "./ListPosts.module.scss";

interface ListPostsProps {
    posts: IPost[];
}

export const ListPosts = (data: ListPostsProps) => {
    let count = -1;

    const posts = data.posts;
    
    return (
        <div className="container">
            <div className={styles.listPosts}>
                {posts.map((post, index) => {
                    if(index != 0){
                        count++;
                        return (
                            <>
                            {(count === 1 || count == 4) &&
                                <Promo>
                                    <div className="conteudo">
                                        <h2>Wordpress na prática, sem enrolação</h2>
                                        <p>Estude com aulas ao vivo toda semana</p>
                                        <Link href="https://codeskills.com.br/lab/curso-de-wordpress/">
                                            <a  target="_blank" className="btn">Saiba mais</a>
                                        </Link>
                                    </div>
                                </Promo>
                            }
                            <Post key={post.id} data={post} />
                            </>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ListPosts;