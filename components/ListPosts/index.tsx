import usePosts from "../../utils/usePosts";
import Post from "../Post";
import Promo from "../Promo";
import styles from "./ListPosts.module.scss";

export const ListPosts = () => {

    const posts = usePosts();
    let count = -1;
    
    return (
        <div className="container">
            <div className={styles.listPosts}>
                {posts.map((post, index) => {
                    count++;
                    return  count === 1 || count == 4 ? (
                        <>
                            <Promo>
                                <h2>{post.title}</h2>
                            </Promo>
                        </>
                    ) : (
                        <Post key={post.id} data={post} />
                    ); 
                })}
            </div>
        </div>
    )
}

export default ListPosts;