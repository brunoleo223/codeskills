import Image from "next/image";
import styles from "./Menu.module.scss";

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.container}`}>
                <div>
                    <Image
                        src="/images/logo.png"
                        width={161}
                        height={66}
                        alt="Logo CodeSkills"
                    />
                </div>
                <ul>
                    <li>Artigos</li>
                    <li>Aulas ao vivo</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;