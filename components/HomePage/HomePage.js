import TagGrid from '@components/TagGrid/TagGrid'
import styles from './HomePage.module.scss'

export default function HomePage({ children }) {
    return (
        <>
            <div className={styles['home-container']}>
                <section className={styles['home-intro-container']}>
                    <p className={styles['home-txt']}>Hi, my name is</p>
                    <h2 className={styles['home-name']}>Eli Zwiebel</h2>
                    <h1 className={styles['home-title']}>Full-Stack Web Developer</h1>
                </section>
                <section className={styles['skills']}>
                    <h2 className={styles['skills-heading']}>Skills</h2>
                    <TagGrid />
                </section>
            </div>
        </>
    )
}