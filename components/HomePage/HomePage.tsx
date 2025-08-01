import TagGrid from "@components/TagGrid/TagGrid";
import IconLogoGrid from "@components//IconLogoGrid/IconLogoGrid";
import styles from "./HomePage.module.scss";
import ProjectSection from "@components/ProjectSection/ProjectSection";
import AboutDescription from "@components/AboutDescription/AboutDescription";
import Certifications from "@components/Certifications/Certifications";
import { skillsData } from "@components/HomePage/skills-data";

export default function HomePage() {
    return (
        <>
            <section className={styles["home-intro-container"]}>
                <div className={styles["home-headshot-container"]}>
                    <img
                        src="/assets/imgs/headshot-silo.jpg"
                        alt="Smiling headshot on a white background"
                        width="833"
                        height="835"
                    ></img>
                </div>
                <div className={styles["home-txt-container"]}>
                    <div>
                        <p className={styles["home-txt"]}>Hi, my name is</p>
                        <h2 className={styles["home-name"]}>Eli Zwiebel</h2>
                        <h1 className={styles["home-title"]}>Software Engineer</h1>
                    </div>
                </div>
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>About Me</h2>
                <AboutDescription />
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>Skills</h2>
                <IconLogoGrid />
                <TagGrid data={skillsData} />
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>Projects</h2>
                <ProjectSection />
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>Certifications</h2>
                <Certifications />
            </section>
        </>
    );
}
