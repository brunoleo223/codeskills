import Image from "next/image";
import styles from "./Menu.module.scss";

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.container}`}>
                <div>
                    <Image
                        src="/images/logo.gif"
                        width={161}
                        height={90}
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