import styles from './Project.module.scss'
import TagGrid from '@components/TagGrid/TagGrid'

export default function Project({ heading, description, mobileImg, desktopImg, tagData }) {
    return (
        <div className={styles['project']}>
            <div className={styles['project-about-container']}>
                <h3>{heading}</h3>
                <p>{description}</p>
                {tagData && <TagGrid data={tagData} />}
            </div>
            {(mobileImg && desktopImg) && <div className={styles['project-img-container']}>
                <div className={styles['project-mobile']}>
                    <img className={styles['project-mobile-background']} src='/assets/imgs/mock-background-mobile.png' alt='Mock up of a mobile phone for use as a background'></img>
                    <img className={styles['project-mobile-capture']} src={mobileImg} alt='Mobile website screen capture'></img>
                </div>
                <div className={styles['project-desktop']}>
                    <img className={styles['project-desktop-background']} src='/assets/imgs/mock-background-desktop.png' alt='Mock up of a laptop for use as a background'></img>
                    <img className={styles['project-desktop-capture']} src={desktopImg} alt='Desktop website screen capture'></img>
                </div>
            </div>}
        </div>
    )
}