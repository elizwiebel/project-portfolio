import IconLogo from 'svgs/IconLogo'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <a href="/" className={styles['logo']}>
            <IconLogo />
        </a>
    )
}