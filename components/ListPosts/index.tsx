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
    

    console.log('post data', data.posts);
    
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
                                    <h2>{post.title}</h2>
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