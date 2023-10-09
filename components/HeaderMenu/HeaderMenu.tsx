import styles from './HeaderMenu.module.scss'
import Logo from '@components/Logo/Logo'

export default function HeaderMenu({ children }) {
    return (
        <div className={styles['header-container']}>
            <div className={styles.header}>
                <Logo />
                {children}
            </div>
            <div className={styles['header-spacer']}></div>
        </div>
    )
}
