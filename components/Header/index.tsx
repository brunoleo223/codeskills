import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';

export function Header(){
    return (
        <>
            <div className={styles.videoBg}>
                <video autoPlay muted loop poster="./images/bg.png" src="./video/bg.mp4"></video>    
            </div>
            <div className="container">
                <div className={styles.postData}>
                    <div>
                        <h1 className={styles.postData__title}>
                            A crise do programador júnior (desde sempre)
                        </h1>
                        <p className={styles.postData__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio sed massa elementum lacinia. Ut sed rhoncus enim. Nunc viverra, sem a rhoncus dictum, risus tellus sodales elit.
                        </p>
                        <Link href="#"><a className="btn">Ler Artigo</a></Link>
                    </div>
                    <Image
                        className={styles.postData__thumb}
                        src="/images/thumb.png"
                        alt="Thumbnail"
                        width={616}
                        height={491}
                    />
                </div>
            </div>
        </>
    )
}

export default Header;