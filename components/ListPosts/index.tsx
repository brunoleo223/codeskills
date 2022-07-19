import usePosts from "../../utils/usePosts";
import Post from "../Post";
import styles from "./ListPosts.module.scss";

export const ListPosts = () => {

    const posts = usePosts();

    return (
        <div className="container">
            <div className={styles.listPosts}>
                {posts.map(post => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
        </div>
    )
}

export default ListPosts;