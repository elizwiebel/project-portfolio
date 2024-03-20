import styles from "./Project.module.scss";
import TagGrid from "@components/TagGrid/TagGrid";

type ProjectProps = {
    children?: any;
    heading: string;
    description: string;
    mobileImg?: string;
    desktopImg?: string;
    tagData?: Array<{
        name: string;
        size: number;
        type: string;
    }>;
};

export default function Project({ children, heading, description, mobileImg, desktopImg, tagData }: ProjectProps) {
    const hasNoContent = tagData || mobileImg || desktopImg || children ? false : true;

    return (
        <div className={styles["project"]}>
            <div
                className={`
                    ${styles["project-about-container"]} ${hasNoContent ? styles["--no-content"] : ""}
                `}
            >
                <h3>{heading}</h3>
                <p>{description}</p>
                {tagData && <TagGrid data={tagData} />}
            </div>
            {mobileImg && desktopImg && (
                <div className={styles["project-img-container"]}>
                    <div className={styles["project-mobile"]}>
                        <img
                            className={styles["project-mobile-background"]}
                            src="/assets/imgs/mock-background-mobile.png"
                            alt="Mock up of a mobile phone for use as a background"
                            width="683"
                            height="1377"
                        ></img>
                        <img
                            className={styles["project-mobile-capture"]}
                            src={mobileImg}
                            alt="Mobile website screen capture"
                            width="1170"
                            height="1965"
                        ></img>
                    </div>
                    <div className={styles["project-desktop"]}>
                        <div className={styles["project-scroll-container"]}>
                            <img
                                className={styles["project-desktop-background"]}
                                src="/assets/imgs/mock-background-desktop.png"
                                alt="Mock up of a laptop for use as a background"
                                width="2451"
                                height="1426"
                            ></img>
                            <img
                                className={styles["project-desktop-capture"]}
                                src={desktopImg}
                                alt="Desktop website screen capture"
                                width="2700"
                                height="1540"
                            ></img>
                        </div>
                    </div>
                </div>
            )}
            {children}
        </div>
    );
}
