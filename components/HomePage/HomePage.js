import TagGrid from '@components/TagGrid/TagGrid'
import styles from './HomePage.module.scss'
import Projects from '@components/ProjectSection/ProjectSection'
import { skillsData } from '@components/HomePage/skills-data'

export default function HomePage({ children }) {
    return (
        <>
            <div className={styles['home-container']}>
                <section className={styles['home-intro-container']}>
                    <p className={styles['home-txt']}>Hi, my name is</p>
                    <h2 className={styles['home-name']}>Eli Zwiebel</h2>
                    <h1 className={styles['home-title']}>Full-Stack Web Developer</h1>
                </section>
                <section className={styles['section']}>
                    <h2 className={styles['section-heading']}>Skills</h2>
                    <TagGrid data={skillsData} />
                </section>
                <section className={styles['section']}>
                    <h2 className={styles['section-heading']}>Projects</h2>
                    <Projects />
                </section>
            </div>
        </>
    )
}