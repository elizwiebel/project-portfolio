import styles from './HomePage.module.scss'

export default function HomePage({ children }) {
    return (
        <section className={styles['home-container']}>
            <p className={styles['home-txt']}>Hi, my name is</p>
            <h2 className={styles['home-name']}>Eli Zwiebel</h2>
            <h1 className={styles['home-title']}>Full-Stack Web Developer</h1>
        </section>
    )
}