import Post from "../Post";
import styles from "./ListPosts.module.scss";

export const ListPosts = () => {

    const posts = [
        {
            id: 1,
            title: 'Post 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio sed massa elementum lacinia. Ut sed rhoncus enim. Nunc viverra, sem a rhoncus dictum, risus tellus sodales elit. 1',
            image: 'https://picsum.photos/536/354',
            category: 'Artigos'
        },
        {
            id: 2,
            title: 'Post 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio sed massa elementum lacinia. Ut sed rhoncus enim. Nunc viverra, sem a rhoncus dictum, risus tellus sodales elit. 2',
            image: 'https://picsum.photos/536/354',
            category: 'Artigos'
        },
        {
            id: 3,
            title: 'Post 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio sed massa elementum lacinia. Ut sed rhoncus enim. Nunc viverra, sem a rhoncus dictum, risus tellus sodales elit. 3',
            image: 'https://picsum.photos/536/354',
            category: 'Artigos'
        }
    ]

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