import Image from "next/image";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image
                src="/images/logo.png"
                width={200}
                height={81}
                alt="Logo CodeSkills"
            />
            <p>
            Code Skills 2022 <br/>
            Todos os direitos reservados
            </p>
        </footer>
    )
}

export default Footer;