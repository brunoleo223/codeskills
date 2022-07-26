import { Image } from "react-datocms";
import Link from 'next/link';
import { IPost } from '../../interfaces/Interfaces';
import styles from './Header.module.scss';


interface PostHeaderProps {
    posts: IPost;
}

export const Header = ({posts}: PostHeaderProps) => {
    return (
        <>
            <div className={styles.videoBg}>
                <video autoPlay muted loop poster="./images/bg.png" src="./video/bg.mp4"></video>    
            </div>
            <div className="container">
                <div className={styles.postData}>
                    <div className={styles.postData__contnt}>
                        
                        <Link href={`artigo/${posts.slug}`}>
                            <a>
                                <h1 className={styles.postData__title}>
                                    {posts.title}
                                </h1>
                            </a>
                        </Link>
                        <p className={styles.postData__description}>
                            {posts.excerpt}
                        </p>
                        <Link href={`artigo/${posts.slug}`}><a className="btn">Ler Artigo</a></Link>
                    </div>
                   
                    {/* width={616} height={491} */}
                    <div className={styles.postData__thumb}>
                        <Image data={posts.coverImage.responsiveImage} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;