import styles from './Promo.module.scss';

interface PromoProps {
    children: JSX.Element,
}

export const Promo = ({children}: PromoProps) => {
    return (
        <div className={styles.promo}>
            {children}
        </div>
    )
}

export default Promo;
