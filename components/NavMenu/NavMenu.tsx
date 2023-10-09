import styles from './NavMenu.module.scss'

export default function NavMenu() {
    return (
        <nav className={styles['nav-menu']}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="https://github.com/elizwiebel">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eli-zwiebel/">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </nav>
    )
}
