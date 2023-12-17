import styles from "./ProjectSection.module.scss";
import Project from "@components/Project/Project";
import { project01ResponsiveHeaderData } from "./project01-responsive-header-data";
import { project02WebFormData } from "./project02-web-form-data";

export default function ProjectSection() {
    return (
        <div className={styles["projects"]}>
            <Project
                heading="01 - Responsive Header and Navigation Menu"
                description="Built from the ground up for a Shopify Plus ecommerce store. Nested sliding drawers on mobile and full width drop down mega menu on desktop. Features seamless sticky scrolling functionality. Dynamic links and text sourced from Shopify CMS. Created to match a Figma mock supplied by an internal UI team."
                tagData={project01ResponsiveHeaderData}
                mobileImg="/assets/imgs/project01-capture-mobile-menu-expanded.jpg"
                desktopImg="/assets/imgs/project01-capture-desktop-menu-expanded.jpg"
            />
            <Project
                heading="02 - Web Form Landing Page Template"
                description="Reusable responsive page template featuring a web form. Form hosted through a third party and embedded into HTML. Custom SASS to match site and brand style guidelines. Edits to page content or form embed link available through Shopify CMS."
                tagData={project02WebFormData}
                mobileImg="/assets/imgs/project02-capture-mobile-form.jpg"
                desktopImg="/assets/imgs/project02-capture-desktop-form.jpg"
            />
            <Project heading="More Coming Soon" description="Stay tuned for updates with more projects." />
        </div>
    );
}
