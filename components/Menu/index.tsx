import Image from "next/image";
import Link from "next/link";
import styles from "./Menu.module.scss";

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.container}`}>
                <div>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/logo.gif"
                                width={161}
                                height={90}
                                alt="Logo CodeSkills"
                            />
                        </a>
                    </Link>
                </div>
                <ul>
                    <li><Link href="/"><a>Artigos</a></Link></li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;