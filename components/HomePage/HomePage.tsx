import TagGrid from "@components/TagGrid/TagGrid";
import IconLogoGrid from "@components//IconLogoGrid/IconLogoGrid";
import styles from "./HomePage.module.scss";
import Projects from "@components/ProjectSection/ProjectSection";
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
                        <h2 className={styles["home-name"]}>Elijah Zwiebel</h2>
                        <h1 className={styles["home-title"]}>Software Engineer</h1>
                    </div>
                </div>
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>Skills</h2>
                <IconLogoGrid />
                <TagGrid data={skillsData} />
            </section>
            <section className={styles["section"]}>
                <h2 className={styles["section-heading"]}>Projects</h2>
                <Projects />
            </section>
        </>
    );
}
