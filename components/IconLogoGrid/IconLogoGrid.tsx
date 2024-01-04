import styles from "./IconLogoGrid.module.scss";
import IconCloseX from "svgs/IconCloseX";

export default function IconLogoGrid() {
    return (
        <div className={styles["logo-grid"]}>
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className={styles["logo-grid-item"]}
            >
                <img src="/assets/svgs/LogoJavaScript.svg" title="JavaScript" />
            </a>
            <a href="https://www.typescriptlang.org/docs/" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoTypeScript.svg" title="TypeScript" />
            </a>
            <a href="https://docs.python.org/3/" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoPython.svg" title="Python" />
            </a>
            <a href="https://react.dev/" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoReact.svg" title="React.js" />
            </a>
            <a href="https://nodejs.org/en" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoNode.svg" title="Node.js" />
            </a>
            <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
                className={styles["logo-grid-item"]}
            >
                <img src="/assets/svgs/LogoHTML.svg" title="HTML" />
            </a>
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className={styles["logo-grid-item"]}
            >
                <img src="/assets/svgs/LogoCSS.svg" title="CSS" />
            </a>
            <a href="https://aws.amazon.com/" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoAWS.svg" title="AWS" />
            </a>
            <a href="https://www.shopify.com/" target="_blank" className={styles["logo-grid-item"]}>
                <img src="/assets/svgs/LogoShopify.svg" title="Shopify" />
            </a>
        </div>
    );
}
