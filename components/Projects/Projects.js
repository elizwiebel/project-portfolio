import styles from './Projects.module.scss'
import TagGrid from '@components/TagGrid/TagGrid'
import { project01ResponsiveHeaderData } from './project01-responsive-header-data'

export default function Projects() {
    return (
        <div className={styles['projects']}>
            <div className={styles['project']}>
                <div className={styles['project-about-container']}>
                    <h3>Responsive Header and Navigation Menu </h3>
                    <p>Built from the ground up for a Shopify Plus ecommerce store. Created from a Figma mock, designed by internal UI team.</p>
                    <TagGrid data={project01ResponsiveHeaderData} />
                </div>
                <div className={styles['project-img-container']}>
                    <div className={styles['project-mobile']}>
                        <img className={styles['project-mobile-background']} src='/assets/imgs/mock-background-mobile.png' alt='Mock up of a mobile phone for use as a background'></img>
                        <img className={styles['project-mobile-capture']} src='/assets/imgs/project01-capture-mobile-menu-expanded.jpg' alt='Mobile website screen capture'></img>
                    </div>
                    <div className={styles['project-desktop']}>
                        <img className={styles['project-desktop-background']} src='/assets/imgs/mock-background-desktop.png' alt='Mock up of a laptop for use as a background'></img>
                        <img className={styles['project-desktop-capture']} src='/assets/imgs/project01-capture-desktop-menu-expanded.jpg' alt='Desktop website screen capture'></img>
                    </div>
                </div>
            </div>
            <div className={styles['project']}>
                <div className={styles['project-about-container']}>
                    <h3>More Projects Coming Soon</h3>
                    <p>Stay tuned for updates with more projects.</p>
                </div>
            </div>
        </div>
    )
}