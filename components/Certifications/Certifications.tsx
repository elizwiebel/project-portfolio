import styles from "./Certifications.module.scss";

export default function Certifications() {
    return (
        <div className={styles["certification-container"]}>
            <div className={styles["certification-box"]}>
                <img src="/assets/imgs/LogoAWS.jpg" title="AWS Logo" />
                <h4>AWS Certified Cloud Practitioner</h4>
            </div>
            <div className={styles["certification-box"]}>
                <img src="/assets/imgs/LogoScrum.jpg" title="Scrum.org Logo" />
                <h4>Professional Scrum Master I (PSM I)</h4>
            </div>
            <div className={styles["certification-box"]}>
                <img src="/assets/imgs/LogoGoogle.png" title="Google Logo" />
                <h4>Google Analytics Certification</h4>
            </div>
        </div>
    );
}
